import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Encuesta } from 'src/app/claSS/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {


  ItemsCollection: AngularFirestoreCollection<Encuesta>;
  ItemDoc: AngularFirestoreDocument<Encuesta>;
  Items: Observable<Encuesta[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('encuestas');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Encuesta;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Encuesta) {
    this.ItemDoc = this.db.doc(`encuestas/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Encuesta) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Encuesta) {
    this.ItemDoc = this.db.doc(`encuestas/${Item.id}`);
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
