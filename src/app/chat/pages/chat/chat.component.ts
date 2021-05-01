import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ChatServiceService } from '../../chat-service.service';
// import { Mensaje } from '';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  mensaje = '';
  elemento: any;

  constructor(
    public chatService: ChatServiceService,
    public auth: AuthService
    ) {
    this.chatService.cargarMensajes()
      .subscribe(() => {
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20);
      });
  }

  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this.chatService.agregarMensaje(this.mensaje)
      .then(() => this.mensaje = '')
      .catch((err) => console.error('error al enviar', err));
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }
}
