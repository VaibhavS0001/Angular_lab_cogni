import { Product } from 'src/app/model/product.model';
import * as AppState from '../app.state';

export interface State extends AppState.State {
  products: ProductState;
}
export interface ProductState {
  currentProductId: number | null;
  products: Product[];
  error: string;
}

export const initialState: ProductState = {
  currentProductId: null,
  products: [],
  error: '',
};
