import * as fromPizzasReducer from './pizza-reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface ProductState {
  pizzas: fromPizzasReducer.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzasReducer.PizzaReducer
};

// GET SLICE OF PRODUCT STORE STATE:
export const getProductState = createFeatureSelector<ProductState>('products');
