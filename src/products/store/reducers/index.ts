import * as fromPizzasReducer from './pizza-reducer';
import * as fromToppingsReducer from './toppings-reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface ProductState {
  pizzas: fromPizzasReducer.PizzaState;
  toppings:fromToppingsReducer.ToppingsState
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzasReducer.PizzaReducer,
  toppings: fromToppingsReducer.PizzaToppingsReducer
};

// GET SLICE OF PRODUCT STORE STATE:
export const getProductState = createFeatureSelector<ProductState>('products');
