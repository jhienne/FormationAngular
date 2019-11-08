import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'Nikki\'s app';
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

}
