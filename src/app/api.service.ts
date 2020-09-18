import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Schedule } from './models/schedule';
import { Playoff } from './models/playoff';
import { Conference } from './models/conference';
import { Division } from './models/division';
import { Season } from './models/season';
import { Standing } from './models/standing';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Url = 'https://statsapi.web.nhl.com/api/v1/';

  constructor(private http: HttpClient) { }

  getDivisions(season?: string): Observable<Division>  {
    return this.http.get<Division>(this.Url + 'standings/byDivision' +
      (season ? season : ''));
  }

  getConferences(season?: string): Observable<Conference> {
    return this.http.get<Conference>(this.Url + 'standings/byConference' +
      (season ? season : ''));
  }

  getPlayoffs(season?: string): Observable<Playoff> {
    return this.http.get<Playoff>(this.Url +
      'tournaments/playoffs/?expand=round.series,schedule.game.seriesSummary' +
      (season ? season : ''));
  }

  getStandings(season?: string): Observable<Standing> {
    return this.http.get<Standing>(this.Url + 'standings/byLeague' + (season ? season : ''));
  }

  getSchedule(startDate?: string, endDate?: string): Observable<Schedule> {
    return this.http.get<Schedule>(this.Url + 'schedule' + (startDate ? startDate : '') +
      (endDate ? endDate : '')).pipe(
        map(data => {
          for (const date of data.dates) {
            for (const game of date.games) {
              game.gameDate = new Date(game.gameDate);
            }
          }
          return data;
        })
      )
  }

  getSeasons(): Observable<Season> {
    return this.http.get<Season>(this.Url + 'seasons');
  }
}
