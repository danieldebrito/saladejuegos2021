import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/auth/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  ItemsCollection: AngularFirestoreCollection<User>;
  ItemDoc: AngularFirestoreDocument<User>;
  Items: Observable<User[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('users');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as User;
        data.uid = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: User) {
    this.ItemDoc = this.db.doc(`users/${Item.uid}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: User) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: User) {
    this.ItemDoc = this.db.doc(`users/${Item.uid}`);
    this.ItemDoc.update(Item);
  }
}
