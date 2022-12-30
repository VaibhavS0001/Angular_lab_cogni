import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/model/event.model';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  event: Events[] = [];
  title = "Current Events"
  links = ["events", "Create events", "All events"] 
  constructor(private events: EventService){
  }
  ngOnInit(): void {
    this.events.getEvents().subscribe(events =>{
      events.forEach(event =>{
        this.event.push(event)
      })
    })
  }

}
