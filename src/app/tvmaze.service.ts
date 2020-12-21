import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  shows: Observable<any>
  episodes: Observable<any>
  
  constructor(private http: HttpClient) { }

  fetchShows(title: string) {
    const params = new HttpParams({ fromObject: { q: title } })
    this.shows = this.http.get<any[]>('http://api.tvmaze.com/search/shows', { params })
    return this.shows
  }

  getShow(id: number) {
    this.episodes = this.http.get<any[]>(`http://api.tvmaze.com/shows/${id}/episodes`)
    return this.episodes
  }

}
