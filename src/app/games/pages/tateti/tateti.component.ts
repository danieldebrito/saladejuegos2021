import { Component, OnInit } from '@angular/core';
import { JugadasService } from 'src/app/services/jugadas.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Jugada } from 'src/app/class/jugada';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  public juegoNombre: string;
  public resultado = '';
  public puntaje = 0;
  public fecha = '';
  public jugador = '';
  public jugada: Jugada = {};

  public hayGanador = false;
  public disabledButton = false;
  public mensaje = '';

  constructor(
    private jugadasService: JugadasService,
    public auth: AuthService) {
    this.juegoNombre = 'TA TE TI';
    this.mensaje = 'JUGANDO';
  }

  posiciones = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']];

  ficha = 'O';

  presion(fila: number, columna: number): void {
    if (this.posiciones[fila][columna] === '-') {
      this.posiciones[fila][columna] = this.ficha;
      this.verificarGano('X');
      this.verificarGano('O');
      this.cambiarJugador();
    }
  }

  reiniciar(): void {
    for (let f = 0; f < 3; f++) {
      for (let c = 0; c < 3; c++) {
        this.posiciones[f][c] = '-';
      }
    }
    this.hayGanador = false;
    this.disabledButton = false;
    this.mensaje = 'JUGANDO';
  }

  cambiarJugador(): void {
    if (this.ficha === 'O') {
      this.ficha = 'X';
    }
    else {
      this.ficha = 'O';
    }
  }


  verificarGano(ficha: string): void {
    if (this.posiciones[0][0] === ficha && this.posiciones[0][1] === ficha && this.posiciones[0][2] === ficha) {
      this.hayGanador = true;
    }
    if (this.posiciones[1][0] === ficha && this.posiciones[1][1] === ficha && this.posiciones[1][2] === ficha) {
      this.hayGanador = true;

    }
    if (this.posiciones[2][0] === ficha && this.posiciones[2][1] === ficha && this.posiciones[2][2] === ficha) {
      this.hayGanador = true;

    }
    if (this.posiciones[0][0] === ficha && this.posiciones[1][0] === ficha && this.posiciones[2][0] === ficha) {
      this.hayGanador = true;

    }
    if (this.posiciones[0][1] === ficha && this.posiciones[1][1] === ficha && this.posiciones[2][1] === ficha) {
      this.hayGanador = true;

    }
    if (this.posiciones[0][2] === ficha && this.posiciones[1][2] === ficha && this.posiciones[2][2] === ficha) {
      this.hayGanador = true;

    }
    if (this.posiciones[0][0] === ficha && this.posiciones[1][1] === ficha && this.posiciones[2][2] === ficha) {
      this.hayGanador = true;

    }
    if (this.posiciones[0][2] === ficha && this.posiciones[1][1] === ficha && this.posiciones[2][0] === ficha) {
      this.hayGanador = true;
    }

    if (this.hayGanador && this.ficha === 'O') {
      this.resultado = 'Ganó';
      this.puntaje = 10;
      this.addJugada();
      this.disabledButton = true;
      this.mensaje = 'GANASTE!!!';
    }

    if (this.hayGanador && this.ficha === 'X') {
      this.resultado = 'Perdió';
      this.puntaje = 0;
      this.addJugada();
      this.disabledButton = true;
      this.mensaje = 'Perdiste :-( ';
    }

  }

  public addJugada(): void {
    this.jugada.juego = this.juegoNombre;
    this.jugada.puntaje = this.puntaje;
    this.jugada.resultado = this.resultado;
    this.jugada.fechaHora = this.jugadasService.getfecha();

    this.jugadasService.addItem(this.jugada);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.auth.user$.subscribe(
      item => {
        this.jugada.jugador = item.email;
      }
    );
  }
}
