import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    {path: 'home', label: 'Home'},
    {path: 'standings', label: 'Standings'},
    {path: 'schedule', label: 'Schedule'}
  ];
  bgColor = 'primary';
}
