import { Component, Input, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/class/encuesta';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() encuesta: Encuesta = {};

  constructor() { }

  ngOnInit(): void {
  }

}
