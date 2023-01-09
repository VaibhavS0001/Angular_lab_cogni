import { Animal } from 'src/app/common/animallist/animal-list.component';
import * as AppState from '../app.state';

export interface State extends AppState.State {
  animals: AnimalState;
}
export interface AnimalState {
  currentAnimalId: number | null;
  animals: Animal[];
  error: string;
}

export const initialState: AnimalState = {
  currentAnimalId: null,
  animals: [],
  error: '',
};
