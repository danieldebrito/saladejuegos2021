import { Component, OnInit } from '@angular/core';
import { Jugada } from 'src/app/class/jugada';
import { JugadasService } from 'src/app/services/jugadas.service';

@Component({
  selector: 'app-memoriza',
  templateUrl: './memoriza.component.html',
  styleUrls: ['./memoriza.component.css']
})
export class MemorizaComponent implements OnInit {

  public display: string = '';
  public serieAleatoria: string = '';

  public respuesta: string = '';
  public respuestaDisplay: string = '_';

  public deshabilitaBotones = true;
  public list = [7, 8, 9, 4, 5, 6, 1, 2, 3]; // botonera

  public cantAciertos = 0;

  public juegoNombre: string;
  public resultado = '';
  public puntaje = 0;
  public fecha = '';
  public jugador = '';
  public jugada: Jugada = {};
  public mensaje = '';

  constructor(
    private jugadasService: JugadasService,
  ) {
    this.juegoNombre = 'Memorizá';
  }

  public addJugada(): void {
    this.jugada.juego = this.juegoNombre;
    this.jugada.puntaje = this.puntaje;
    this.jugada.resultado = this.resultado;
    this.jugada.fechaHora = this.jugadasService.getfecha();

    this.jugadasService.addItem(this.jugada);
  }

  public allClear() {
    this.display = '_';
    this.respuesta = '';
    this.respuestaDisplay = '_';
    this.serieAleatoria = '';
    this.mensaje = 'Jugando';
    this.agregaNroAleatorio();
  }

  public agregaNroAleatorio() {

    this.serieAleatoria += Math.round(Math.random() * (9));
    this.display = this.serieAleatoria;

    setTimeout(() => {
      this.deshabilitaBotones = false;
      this.display = '_';
      this.respuestaDisplay = '_';
    }, 3000);
    this.deshabilitaBotones = true;
  }

  public cargarNroPulsado(nroPulsado) {
    this.respuesta += nroPulsado;
    this.respuestaDisplay = this.respuesta;

    let tam = this.respuesta.length - 1;

    if (this.respuesta[tam] !== this.serieAleatoria[tam]) {

      this.resultado = 'Perdió';
      this.puntaje = 0;
      this.addJugada();
      this.mensaje = 'PERDISTE!!!';

      this.display = this.serieAleatoria;
      this.deshabilitaBotones = true;
      return false;
    }

    this.cantAciertos++;
    if (this.cantAciertos === 5){

      this.resultado = 'Ganó';
      this.puntaje = 10;
      this.addJugada();
      this.mensaje = 'GANASTE!!!';

      return true;
    }

    if (this.serieAleatoria.length - 1 === tam) {
      this.agregaNroAleatorio();
      this.respuesta = '';
      this.cantAciertos = 0;
    }
  }

  ngOnInit(): void {
    this.allClear();
  }
}
