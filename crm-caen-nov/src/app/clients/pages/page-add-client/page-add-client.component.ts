import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public title: string;
  public label: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Clients';
    this.label = 'Ajouter un client';
  }

}
