import { Component, OnInit } from '@angular/core';
import { JugadasService } from 'src/app/services/jugadas.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Jugada } from 'src/app/class/jugada';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  grilla = [[]];

  public juegoNombre: string;
  public resultado = '';
  public puntaje = 0;
  public fecha = '';
  public jugador = '';
  public jugada: Jugada = {};
  public mensaje = '';

  elementos = [
    { iconSrc: 'heart', seleccionada: false },
    { iconSrc: 'car', seleccionada: false },
    { iconSrc: 'book', seleccionada: false },
    { iconSrc: 'apple', seleccionada: false },
    { iconSrc: 'bell', seleccionada: false },
    { iconSrc: 'bicycle', seleccionada: false },
    { iconSrc: 'bomb', seleccionada: false },
    { iconSrc: 'bolt', seleccionada: false },
    { iconSrc: 'heart', seleccionada: false },
    { iconSrc: 'car', seleccionada: false },
    { iconSrc: 'book', seleccionada: false },
    { iconSrc: 'apple', seleccionada: false },
    { iconSrc: 'bell', seleccionada: false },
    { iconSrc: 'bicycle', seleccionada: false },
    { iconSrc: 'bomb', seleccionada: false },
    { iconSrc: 'bolt', seleccionada: false }
  ];

  pares = [];

  constructor(
    private jugadasService: JugadasService,
    public auth: AuthService) {
    this.juegoNombre = 'Memotest';
  }

  ngOnInit(): void {
    this.iniciarGrilla();
    this.auth.user$.subscribe(
      item => {
        this.jugada.jugador = item.email;
      }
    );
  }

  public addJugada(): void {
    this.jugada.juego = this.juegoNombre;
    this.jugada.puntaje = this.puntaje;
    this.jugada.resultado = this.resultado;
    this.jugada.fechaHora = this.jugadasService.getfecha();

    this.jugadasService.addItem(this.jugada);
  }

  iniciarGrilla(): void {
    // desordeno
    this.elementos = this.elementos
      .sort(() => Math.random() - 0.5);
    // inserto elementos
    let count = 0;
    for (let i = 0; i < 4; i++) {
      this.grilla[i] = [];
      for (let j = 0; j < 4; j++) {
        this.grilla[i][j] = this.elementos[count];
        count++;
      }
    }
  }


  elegirCelda(celda): any {
    if (celda.seleccionada) {
      return;
    }

    celda.seleccionada = true;
    if (this.pares.length < 2) {
      this.pares.push(celda);
    }

    if (this.pares.length === 2) {
      // evaluo si se queda destapada
      let pares = this.pares;
      this.pares = [];
      if (pares[0].iconSrc !== pares[1].iconSrc) {
        setTimeout(() => {
          pares[0].seleccionada = false;
          pares[1].seleccionada = false;
          pares = [];
        }, 1000);

      }
      // evaluo si ya gano
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < this.grilla.length; index++) {

        if (this.grilla[index].some((x) => {
          return !x.seleccionada;
        })) {
          return;
        }
      }
      this.resultado = 'Ganó';
      this.puntaje = 10;
      this.addJugada();
      this.mensaje = 'GANASTE!!!';
    }
  }

}
