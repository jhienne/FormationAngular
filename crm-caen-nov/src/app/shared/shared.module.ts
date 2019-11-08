import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { ButtonAComponent } from './components/button-a/button-a.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionComponent } from './components/action/action.component';


@NgModule({
  declarations: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, ButtonAComponent, ActionComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, TemplatesModule, ButtonAComponent, ActionComponent]
})
export class SharedModule { }
