import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { fakeClients } from './fake-clients';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Client[];

  constructor() {
    this.collection = fakeClients;
  }

  // get collection
  public get collection() {
    return this.pCollection;
  }

  // set collection
  public set collection(col: Client[]) {
    this.pCollection = col;
  }

  // update item in collection
  public update(item: Client, state: StateClient) {
    item.state = state;
  }

  // add item in collection

  // delete item in collection

  // get item by id
}
