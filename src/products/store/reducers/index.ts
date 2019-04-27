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

// GET SLICE OF PIZZA STATE FROM PRODUCT STORE STATE:
export const getPizzasState = createSelector(
  getProductState,
  (state: ProductState) => state.pizzas
);

// GET SLICE OF PIZZA `loading` PROP FROM PIZZA STATE RETRIEVED FROM PRODUCT STORE STATE:
export const getLoading = createSelector(
  getPizzasState,
  fromPizzasReducer.getPizzasLoading
);

// GET SLICE OF PIZZA `Loaded` PROP FROM PIZZA STATE RETRIEVED FROM PRODUCT STORE STATE:
export const getLoaded = createSelector(
  getPizzasState,
  fromPizzasReducer.getPizzasLoaded
);

// GET SLICE OF PIZZA `data` PROP FROM PIZZA STATE RETRIEVED FROM PRODUCT STORE STATE:
export const getPizzas = createSelector(
  getPizzasState,
  fromPizzasReducer.getAllPizzas
);
