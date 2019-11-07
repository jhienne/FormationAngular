import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-button-a',
  templateUrl: './button-a.component.html',
  styleUrls: ['./button-a.component.scss']
})
export class ButtonAComponent implements OnInit {
  @Input() label: string;
  @Input() route: string;
  @Input() href: string;

  constructor() { }

  ngOnInit() {

  }

}
