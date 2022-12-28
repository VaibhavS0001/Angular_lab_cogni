import { Component, Host, NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';


@Component({
  template: `<div  appHighlight='pink'>Highlight</div>`,
})
class HostComponent{}

@NgModule({
  declarations: [HostComponent, HighlightDirective],
  exports: [HostComponent]
})
class HostModule{}

describe('HighlightDirective', () => {
  let component: HostComponent
  let element: HTMLElement
  let fixture: ComponentFixture<HostComponent>

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [CommonModule, HostModule],
      declarations: [HighlightDirective]
    }).compileComponents()
    fixture = TestBed.createComponent(HostComponent)
    component = fixture.componentInstance
    element = fixture.nativeElement
    fixture.detectChanges()
  })

  it('should create an instance', () => {
    expect(component).toBeTruthy()
  });

  it('it should highlight the template', () => {
    const el = element.querySelector('div')?.style?.backgroundColor
    expect(el).toEqual('pink')
  })

});
