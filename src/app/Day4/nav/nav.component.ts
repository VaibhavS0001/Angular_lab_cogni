import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
@Input() title: string
@Input() links: string[]

constructor(private route: Router){}

logout(){
  this.route.navigate([''], { replaceUrl: true });
}

}
