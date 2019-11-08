import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version$: BehaviorSubject<number>;
  // public title2: string;

  constructor(
    private vers: VersionService
  ) {

  }

  ngOnInit() {
    this.version$ = this.vers.version$;
  }

}
