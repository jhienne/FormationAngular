import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public title: string;
  public label: string;
  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.title = 'Prestations';
    this.label = 'Ajouter une prestation';
  }

  public add(item: any) {
    this.prestationService.add(item);
    //this.router.navigate(['prestations']);
    //redirection relative par rapport à la route sur laquelle vous êtes.
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
