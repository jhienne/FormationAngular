import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VersionService } from 'src/app/shared/services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public version$: BehaviorSubject<number>;
  // public title2: string;

  constructor(
    private vers: VersionService
  ) {
    // this.title2 = 'test';

  }

  ngOnInit() {
    // this.title2 = 'test2';
    this.version$ = this.vers.version$;
  }

  updateVersion() {
    this.vers.upgrade();
  }

}
