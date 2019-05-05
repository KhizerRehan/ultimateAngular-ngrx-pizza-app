
// GET SLICE OF PIZZA STATE FROM PRODUCT STORE STATE:
import {createSelector} from "@ngrx/store";
import * as fromRoot from '../../../app/store';
import * as fromProductFeature from "../reducers";
import * as fromPizzasReducer from "../reducers/pizza-reducer";
import {Pizza} from "../../models/pizza.model";

export const getPizzasState = createSelector(
  fromProductFeature.getProductState,
  (state: fromProductFeature.ProductState) => state.pizzas
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

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId]
  }
);

