import * as fromPizzasReducer from './pizza-reducer';
import { ActionReducerMap} from "@ngrx/store";

export interface ProductState {
  pizzas: fromPizzasReducer.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzasReducer.PizzaReducer
};
