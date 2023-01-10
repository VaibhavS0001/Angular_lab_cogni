import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnimalState } from './animal.state';

export const getAnimalFeatureState = createFeatureSelector<AnimalState>('animals');

export const getAnimals = createSelector(
  getAnimalFeatureState,
  (state) => state.animals
);

export const getError = createSelector(
  getAnimalFeatureState,
  (state) => state.error
);
