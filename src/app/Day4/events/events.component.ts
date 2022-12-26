import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/event.model';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  event: Events[] = [];
  constructor(private events: EventService){
  }
  ngOnInit(): void {
    this.events.getEvents().subscribe(events =>{
      events.forEach(event =>{
        this.event.push(event)
      })
    })
    console.log(this.event)
  }

}
