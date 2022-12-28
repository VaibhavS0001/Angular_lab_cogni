import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventService } from 'src/app/shared/event.service';
import { NavComponent } from '../nav/nav.component';
import { EventsComponent } from './events.component';
import { Observable } from 'rxjs';
describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('EventService', ['getEvents']);
    spy.getEvents.and.returnValue(
      new Observable((ob) => {
        ob.next(`[
        {
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
            },
            {
              id: 112,
              name: 'some random Session',
              presenter: 'Presenter 2',
              duration: '45 minutes',
              level: '4',
              voter: ['voter 1', 'voter 2', 'voter 3', 'voter 4'],
            },
          ],
        },
        {
          id: 2,
          name: 'Event 2',
          date: '2022-05-10',
          time: '5:00pm',
          price: 1000,
          imageURL: '../assets/images/event.jpg',
          location: {
            address: 'TSM1',
            city: 'Delhi',
            country: 'India',
          },
          sessions: [
            {
              id: 102,
              name: 'some random Session',
              presenter: 'Presenter 2',
              duration: '45 minutes',
              level: '4',
              voter: ['voter 1', 'voter 2', 'voter 3', 'voter 4'],
            },
            {
              id: 142,
              name: 'some random Session',
              presenter: 'Presenter 2',
              duration: '45 minutes',
              level: '4',
              voter: ['voter 11', 'voter 12', 'voter 31', 'voter 41'],
            },
          ],
        },
        {
          id: 3,
          name: 'Event 3',
          date: '2022-12-01',
          time: '12:00pm',
          price: 100,
          imageURL: '../assets/images/event.jpg',
          location: {
            address: 'TS1',
            city: 'Delhi',
            country: 'India',
          },
          sessions: [
            {
              id: 172,
              name: 'some random Session',
              presenter: 'Presenter 2',
              duration: '45 minutes',
              level: '4',
              voter: ['voter 10', 'voter 22', 'voter 33', 'voter 44'],
            },
          ],
        },
      ]`);
      })
    );
    await TestBed.configureTestingModule({
      declarations: [EventsComponent, NavComponent],
      providers: [{ provide: EventService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component and get Events', () => {
    expect(component).toBeTruthy();
  });
});
