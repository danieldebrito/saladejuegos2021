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

  public agregarNroRespuestaYcompara(nroPulsado) {

    let tam = this.display.length;
    this.respuesta += nroPulsado;

    for (let i = 0; i < tam; i++) {
      if (this.display[i] === this.respuesta[i]) {
        if (i === tam-1) {
          this.agregaNroAleatorio();
        }
      } else {
        alert('falseee');
        return this.resultado = false;
      }
    } 


    this.respuesta = '';

    console.log(this.respuesta === this.display);
    this.resultado = (this.respuesta === this.display);
  }


  ngOnInit(): void {
    this.allClear();
  }

}
