import { createAction, props } from '@ngrx/store';
import { Animal } from 'src/app/common/animallist/animal-list.component';

export const loadAnimals = createAction('[Animal] Load');

export const loadAnimalsSuccess = createAction(
  '[Animal] Load Success',
  props<{ animals: Animal[] }>()
);

export const loadAnimalsFailure = createAction(
  '[Animal] Load Fail',
  props<{ error: string }>()
);

export const updateAnimal = createAction(
  '[Animal] Update Animal',
  props<{ animal: Animal }>()
);

export const updateAnimalSuccess = createAction(
  '[Animal] Update Animal Success',
  props<{ animal: Animal }>()
);

export const updateAnimalFailure = createAction(
  '[Animal] Update Animal Fail',
  props<{ error: string }>()
);

export const createAnimal = createAction(
  '[Animal] Create Animal',
  props<{ animal: Animal }>()
);

export const createAnimalSuccess = createAction(
  '[Animal] Create Animal Success',
  props<{ animal: Animal }>()
);

export const createAnimalFailure = createAction(
  '[Animal] Create Animal Fail',
  props<{ error: string }>()
);

export const deleteAnimal = createAction(
  '[Animal] Delete Animal',
  props<{ animalId: number }>()
);

export const deleteAnimalSuccess = createAction(
  '[Animal] Delete Animal Success',
  props<{ animalId: number }>()
);

export const deleteAnimalFailure = createAction(
  '[Animal] Delete Animal Fail',
  props<{ error: string }>()
);
