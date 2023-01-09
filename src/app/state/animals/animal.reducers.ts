import { createReducer, on } from '@ngrx/store';
import { AnimalState, initialState } from './animal.state';
import * as AnimalActions from './animal.actions';

export const animalReducer = createReducer(
  initialState,

  //     on(AnimalActions.loadAnimals, (state)=>({
  //       ...state,
  //       animals: [],
  //       error: ''
  // })),
  on(AnimalActions.loadAnimalsSuccess, (state, action): AnimalState => {
    return {
      ...state,
      animals: action.animals,
      error: '',
    };
  }),
  on(AnimalActions.loadAnimalsFailure, (state, action): AnimalState => {
    return {
      ...state,
      animals: [],
      error: action.error,
    };
  }),
  on(AnimalActions.updateAnimalSuccess, (state, action): AnimalState => {
    const updatedAnimals = state.animals.map((item) =>
      action.animal.id === item.id ? action.animal : item
    );
    return {
      ...state,
      animals: updatedAnimals,
      currentAnimalId: action.animal.id,
      error: '',
    };
  }),
  on(AnimalActions.updateAnimalFailure, (state, action): AnimalState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(AnimalActions.createAnimalSuccess, (state, action): AnimalState => {
    return {
      ...state,
      animals: [...state.animals, action.animal],
      currentAnimalId: action.animal.id,
      error: '',
    };
  }),
  on(AnimalActions.createAnimalFailure, (state, action): AnimalState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(AnimalActions.deleteAnimalSuccess, (state, action): AnimalState => {
    return {
      ...state,
      animals: state.animals.filter((animal) => animal.id !== action.animalId),
      currentAnimalId: null,
      error: '',
    };
  }),
  on(AnimalActions.deleteAnimalFailure, (state, action): AnimalState => {
    return {
      ...state,
      error: action.error,
    };
  })
);
