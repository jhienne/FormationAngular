import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  public collection: Client[];
  public headers: string[];
  public states = StateClient;
  // public states = Object.values(State);
  public title: string;
  public label: string;
  public labelBtn: string;
  public routeBtn: string;

  constructor(
    private clientService: ClientsService
    ) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
    this.headers = [
      'id',
      'Name',
      'email',
      'State'
    ];
    this.title = 'Clients';
    this.label = 'Tous les clients';
    this.labelBtn = 'Ajouter un client';
    this.routeBtn = 'add';
  }

  public update(item: any, event: any) {
    // console.log(item, event.target.value);
    this.clientService.update(item, event.target.value);
  }

}
