import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from './models/mensaje';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  // importo el servicio de firestore segun la documentacion de algularFire2
  constructor(
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe( user => {
        console.log('estado del usuario', user);

        if (!user) {
          return;
        }

        this.usuario.nombre = user.email;
        this.usuario.uid = user.uid;
      });
    }


  cargarMensajes() {
    // ordeno por fecha los mensajes
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc')
      .limit(5));

    // para estar pendientes de todos los cambios
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        console.log(mensajes);
        this.chats = [];

        for (const mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }

        return this.chats;
      })
    );
  }

  agregarMensaje(texto: string) {
    const mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };
    return this.itemsCollection.add(mensaje);
  }
}
