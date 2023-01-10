import { Component, Input, OnInit} from '@angular/core';
import { Events } from 'src/app/model/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  @Input() eventDets!: Events;
  eventDetstring: any
  constructor() {}
  ngOnInit(): void {
    // console.log(this.eventDets)
  }

}
