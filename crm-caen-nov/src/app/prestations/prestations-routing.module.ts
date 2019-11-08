import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: { title: 'Prestations', label: 'Toutes les prestations' }
  },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: { title: 'Prestations', label: 'Ajoute une prestation' }
  },
  {
    path: 'edit/:id',
    component: PageEditPrestationComponent,
    data: { title: 'Prestations', label: 'Edite une prestation' }
  },

];

@NgModule({

  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
