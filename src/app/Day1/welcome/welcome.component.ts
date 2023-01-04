import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  pipe: string = 'Vaibhav'
  num: number = 6
  checked!: boolean
  
  onclick(e: any){
    this.checked = e.target.checked
  }
}
