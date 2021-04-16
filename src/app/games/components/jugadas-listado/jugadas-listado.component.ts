import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Jugada } from 'src/app/class/jugada';
import { JugadasService } from 'src/app/services/jugadas.service';

@Component({
  selector: 'app-jugadas-listado',
  templateUrl: './jugadas-listado.component.html',
  styleUrls: ['./jugadas-listado.component.css']
})
export class JugadasListadoComponent implements OnInit {

  displayedColumns: string[] = [
    'jugador',
    'juego',
    'fechaHora',
    'puntaje',
    'resultado'];

  public data: Jugada[] = [];
  public dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private jugadasServices: JugadasService) { }

  public getItems() {
    this.jugadasServices.getItems().subscribe(elemets => {
      this.data = elemets;
      console.log(this.data);
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {
    this.getItems();
  }
}
