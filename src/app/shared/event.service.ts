import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = "json/events.json"

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]> { 
    return this.http.get<Events[]>(this.url)
  }
}