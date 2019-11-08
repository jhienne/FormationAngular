import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit, OnDestroy {

  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public headers: string[];
  public states = State;
  //public states = Object.values(State);
  public title: string;
  public label: string;
  public routeBtn: string;
  public labelBtn: string;
  sub: Subscription;

  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.collection$ = this.prestationService.collection;
    // this.sub = this.prestationService.collection.subscribe((data) => {
    //   this.collection = data;
    //  });
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State',
      'Action'
    ];
    this.labelBtn = 'Ajouter une prestation';
    this.routeBtn = 'add';
    //console.log( this.route);
    this.route.data.subscribe((donnees) => {
      this.title = donnees.title;
      this.label = donnees.label;
    }
    )

  }

  public update(item: any, event: any) {
    //console.log(item, event.target.value);
    this.prestationService.update(item, event.target.value.then((res) => {
      //traiter reponse API
      item.state = event.target.value;
    }));
    // this.prestationService.update(item, event.target.value.subscribe((res) => {
    //   item.state = event.target.value;
    // }));
  }


  public doAction(action: string, item: Prestation) {
    if (action === 'delete') {
      this.prestationService.delete(item);
    }

    if (action === 'edit') {
      this.router.navigate(['prestations/edit', item.id]);
    }

  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
