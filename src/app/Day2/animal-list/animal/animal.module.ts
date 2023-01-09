import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/common.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AnimalRoutingModule } from './animal.routing.module';
import { animalReducer } from 'src/app/state/animals/animal.reducers';
import { AnimalEffects } from 'src/app/state/animals/animal.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AnimalRoutingModule,
    StoreModule.forFeature('animals', animalReducer),
    EffectsModule.forFeature([AnimalEffects]),
  ]
})
export class AnimalModule { }
