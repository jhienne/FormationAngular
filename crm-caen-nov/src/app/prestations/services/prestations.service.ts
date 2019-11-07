import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;

  constructor(private afs: AngularFirestore) {
    //this.collection = fakePrestations;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      //map(tab) => tab.map(obj => new Prestation(obj));
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
  }

  // get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  // set collection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }

  // update item in collection
  public update(item: Prestation, state: State) {
    item.state = state;
  }

  // add item in collection
  public add(item: Prestation) {
    //this.collection.push(new Prestation(item));

  }
  // delete item in collection

  // get item by id
}
