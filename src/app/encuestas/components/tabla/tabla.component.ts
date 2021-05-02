import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Encuesta } from 'src/app/class/encuesta';
import { EncuestaService } from 'src/app/encuestas/encuesta.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Output() lanzaEncuesta = new EventEmitter();


  displayedColumns: string[] = [
    'fecha',
    'usuario',
    'nombre',
    'apellido',
    'sexo',
    'edad',
    'ver'
  ];

  public data: Encuesta[] = [];
  public dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private encuestaSvc: EncuestaService) { }

  public getItems() {
    this.encuestaSvc.getItems().subscribe(elemets => {
      this.data = elemets;
      console.log(this.data);
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  public lanzarElemento(encuesta: Encuesta){
    this.lanzaEncuesta.emit({encuestaLanzada: encuesta});
  }

  ngOnInit() {
    this.getItems();
  }
}
