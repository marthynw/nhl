import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Division } from '../models/division';
import { Conference } from '../models/conference';
import { Playoff } from '../models/playoff';
import { Season } from '../models/season';
import { Standing } from '../models/standing';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  divisions: Division;
  conferences: Conference;
  playoffs: Playoff;
  seasons: Season;
  standings: Standing;
  optionalSeasons: string[] = [];
  selectedSeason: string;
  displayedColumns = ['rank', 'name', 'games', 'wins', 'losses', 'ot',
  'goals', 'points'];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getDivisions();
    this.getConferences();
    this.getPlayoffs();
    this.getSeasons();
    this.getStandings();
  }

  getDivisions(season?: string): void {
    this.api.getDivisions(season).subscribe((data: Division) => {
      this.divisions = {...data};
    });
  }

  changeSeason(select: string): void {
    delete this.playoffs;
    delete this.standings;
    delete this.divisions;
    delete this.conferences;
    const season = select.substr(0, 4) + select.substr(5, 4);
    const selectSeason = '?season=' + season;
    this.getDivisions(selectSeason);
    this.getConferences(selectSeason);
    const selectPlayoff = '&season=' + season;
    this.getPlayoffs(selectPlayoff);
    this.getStandings(selectSeason);
  }

  formatSeasons(): void {
    for (const season of this.seasons?.seasons) {
      this.optionalSeasons.push(season.seasonId.substr(0, 4) + '/' +
      season.seasonId.substr(4, 4));
    }
    this.selectedSeason = this.optionalSeasons[this.optionalSeasons.length - 1];
  }

  getConferences(season?: string): void {
    this.api.getConferences(season).subscribe((data: Conference) => {
      this.conferences = {...data};
    });
  }

  getPlayoffs(season?: string): void {
    this.api.getPlayoffs(season).subscribe((data: Playoff) => {
      this.playoffs = {...data};
    });
  }

  getStandings(season?: string): void {
    this.api.getStandings(season).subscribe((data: Standing) => {
      this.standings = {...data};
    });
  }

  getSeasons(): void {
    this.api.getSeasons().subscribe((data: Season) => {
      this.seasons = {...data};
      this.formatSeasons();
    });
  }

}
