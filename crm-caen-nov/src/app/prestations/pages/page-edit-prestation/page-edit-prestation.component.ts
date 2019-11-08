import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  public title: string;
  public label: string;
  public item$: Observable<Prestation>;
  public id: string;


  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
  }
  ngOnInit() {
    this.route.data.subscribe((donnees) => {
      this.title = 'Prestations';
      this.label = 'Editer une prestation';

    });
    // this.item$ = this.prestationService.getPrestation(this.id);

    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get('id');
        return this.prestationService.getPrestation(params.get('id'));
      })
    );
  }

  public edit(item: any) {
    item.id = this.id;
    this.prestationService.update(item).then((res) => {
      this.router.navigate(['prestations']);
    })
  };
}
