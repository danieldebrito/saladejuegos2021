import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoriza',
  templateUrl: './memoriza.component.html',
  styleUrls: ['./memoriza.component.css']
})
export class MemorizaComponent implements OnInit {

  public display: string = '';
  public respuesta: string = '';
  public list = [];
  public resultado: boolean = true;

  constructor() {
    this.list = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  }

  public allClear() {
    this.display = '';
    this.respuesta = '';
    this.agregaNroAleatorio();
  }

  public agregaNroAleatorio() {
    this.display += Math.round(Math.random() * (9));
  }

  public cargarNroPulsado(nroPulsado) {
    
    this.respuesta += nroPulsado;
    let tam = this.respuesta.length - 1;

    if (this.respuesta[tam] !== this.display[tam]) {
      alert('falsee');
    }

    if (this.display.length - 1 === tam) {
      this.agregaNroAleatorio();
      
      this.respuesta = '';
    }


  }

  ngOnInit(): void {
    this.allClear();
  }
}
