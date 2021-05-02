import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/class/encuesta';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public encuesta: Encuesta = {};

  constructor() { }

  cargaEncuesta(event){
    this.encuesta = event.encuestaLanzada;
  }

  ngOnInit(): void {
  }

}