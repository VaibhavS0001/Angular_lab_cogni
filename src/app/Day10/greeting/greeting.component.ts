import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  @Input() messageText: string = 'Welcome to angular content projection';
  constructor() {
    console.log('greeting constructed');
  }
  ngOnDestroy(): void {
    console.log('greeting destroyed');
  }
  ngOnInit(): void {
    console.log('greeting in oninit');
  }
  ngOnChanges(): void {
    console.log('greeting component changes');
  }
  ngDoCheck() {
    console.log('doCheck of greeting');
  }
  ngAfterContentInit() {
    console.log('greeting content init');
  }
  ngAfterContentChecked() {
    console.log('greeting content checked');
  }
  ngAfterViewInit() {
    console.log('greeting view init');
  }
  ngAfterViewChecked() {
    console.log('greeting view checked');
  }
}
