import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jugada } from 'src/app/class/jugada';

@Injectable({
  providedIn: 'root'
})
export class JugadasService {

  ItemsCollection: AngularFirestoreCollection<Jugada>;
  ItemDoc: AngularFirestoreDocument<Jugada>;
  Items: Observable<Jugada[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('jugadas');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Jugada;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Jugada) {
    this.ItemDoc = this.db.doc(`jugadas/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Jugada) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Jugada) {
    this.ItemDoc = this.db.doc(`jugadas/${Item.id}`);
    this.ItemDoc.update(Item);
  }

  getfecha() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString();
    const mes = (fechaActual.getMonth() + 1).toString();
    const anio = fechaActual.getFullYear().toString();
    const hora = fechaActual.getHours().toString();
    const minutos = fechaActual.getMinutes().toString();

    return dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minutos;

    /*this.hora = hora + ':' + minutos + ':' + segundos;
    const ret = this.fecha;
    return ret;*/
  }
}
