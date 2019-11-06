import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
  public states = State;
  //public states = Object.values(State);

  constructor(
    private prestationService: PrestationsService
    ) { }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  public update(item: any, event: any) {
    //console.log(item, event.target.value);
    this.prestationService.update(item, event.target.value);
  }

}
