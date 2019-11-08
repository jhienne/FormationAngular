import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  public faTrashAlt = faTrashAlt;
  public faEdit = faEdit;

  @Output() action: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public delete() {
    this.action.emit('delete');
  }
  public edit() {
    this.action.emit('edit');
  }


}
