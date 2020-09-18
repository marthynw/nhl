import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  copyright$: Subject<any> = new Subject();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getCopyright();
  }

  getCopyright(): void {
    this.api.getStandings().subscribe(data => {
      this.copyright$.next(data.copyright);
    });
  }

}
