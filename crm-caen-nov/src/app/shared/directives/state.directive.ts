import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';
import { StateClient } from '../enums/state-client.enum';
@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State | StateClient;
  @HostBinding('class') hostAttr: string;
  constructor() { }

  ngOnChanges() {
    console.log(this.appState);
    this.hostAttr = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state
      .normalize('NFD')
      .replace(/[\u0300-\u036f\s]/g, '')
      .toLowerCase()}`;
  }
}
// appState vaut Annulé => state-annule
// appState vaut Option => state-option
// appState vaut Confirmé => state-confirme
// on veut binder l'attribut class du host element td avec ce string
