import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { User } from '../model/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  title: string = 'Hello User';
  currentRoute!: string;
  user!: User;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => {
        return result.matches;
      }),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // console.log(event);
        // console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        this.user = JSON.parse(localStorage.getItem('loggedInUser') ?? JSON.stringify({name: 'you are not logged in yet'}));
        this.currentRoute = event.url;
        this.title = event.url
          .replaceAll('%20', ' ')
          .substring(event.url.lastIndexOf('/') + 1);
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
  
  logout(){
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/home'], { replaceUrl: true });
  }
}
