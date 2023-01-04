import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
@Input() title!: string
@Input() links!: string[]

constructor(private route: Router, private auth: AuthService){}

logout(){
  this.auth.changeAuthStatus()
  this.auth.role = ''
  this.route.navigate([''], { replaceUrl: true });
}

}
