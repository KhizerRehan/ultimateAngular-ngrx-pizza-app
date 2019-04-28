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

// GET SLICE OF PIZZA `entities` PROP FROM PIZZA STATE RETRIEVED FROM PRODUCT STORE STATE:
export const getPizzasEntities = createSelector(
  getPizzasState,
  fromPizzasReducer.getPizzasEntities
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities) => Object.keys(entities).map((id) => entities[parseInt(id,10)])
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

