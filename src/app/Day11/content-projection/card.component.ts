import {
  Component,
  ContentChild,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'card',
  template: `
    <div class="card">
      <ng-content select="header"></ng-content>
      <p #header>View Child</p>
      <ng-content select="p"></ng-content>
    </div>
  `,
  styles: [
    `
      .card {
        margin: 5px;
        background-color: yellow;
      }
    `,
  ],
})
export class CardComponent {
  @ContentChild('header') cardContentHeader!: ElementRef;
  @ViewChild('header') cardViewHeader!: ElementRef;

  @ContentChild('p') p1ContentData!: ElementRef;
  @ViewChild('p') p1ViewData!: ElementRef;

  constructor(private renderor: Renderer2) {
  //   console.log(this.cardContentHeader?.nativeElement);
  //   console.log('-------------------------------------------------------');
  //   console.log(this.p1ContentData?.nativeElement);
  // }

  // ngAfterContentInit() {
  //   //cardContentHeader is available here
  //   console.log('CardComponent ->ngAfterContentInit-contentHeader');
  //   console.log('====================================');
  //   console.log(this.cardContentHeader?.nativeElement);
  //   console.log('====================================');
  //   this.renderor.setStyle(
  //     this.cardContentHeader?.nativeElement,
  //     'font-size',
  //     '20px'
  //   );
  //   console.log('-------------------------------------------------------');
  //   console.log(this.p1ContentData?.nativeElement);
  // }

  // ngAfterViewInit() {
  //   console.log('CardComponent ->ngAfterViewInit-viewHeader');
  //   console.log('====================================');
  //   console.log(this.p1ContentData?.nativeElement)
  // }
  }
}
