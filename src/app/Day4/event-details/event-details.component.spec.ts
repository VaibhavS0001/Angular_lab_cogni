import { DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { By } from '@angular/platform-browser';
import { Events } from 'src/app/event.model';

import { EventDetailsComponent } from './event-details.component';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;
  let element:HTMLElement;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [
        EventDetailsComponent,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCardTitle,
        MatDivider,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  it('should render @Input value', () => {
    const event: Events = {
      id: 1,
      name: 'Event 1',
      date: '2022-05-01',
      time: '7:00pm',
      price: 1400,
      imageURL: '../assets/images/event.jpg',
      location: {
        address: 'TSM',
        city: 'Delhi',
        country: 'India',
      },
      sessions: [
        {
          id: 101,
          name: 'Session 1',
          presenter: 'Presenter 1',
          duration: '30 minutes',
          level: '1',
          voter: ['voter 1', 'voter 2', 'voter 3', 'voter 4'],
        }
      ]
    };
    component.eventDets = event;
    fixture.detectChanges();
    const rootEle:DebugElement = fixture.debugElement;
    let val = rootEle.query(By.css('#name')).nativeElement;
    expect(component.eventDets.name).toEqual(val.textContent);
  });
});
