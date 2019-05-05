import * as fromPizzaActionsConstants from '../actions/pizza-actions';
import * as fromPizzaActionsCreators from '../actions/pizza-action-creators';
import {Pizza} from "../../models/pizza.model";

export interface PizzaState {
  entities: {
    [id:number]: Pizza
  },
  loaded: boolean;
  loading: boolean;
}

export const PizzaInitialState: PizzaState = {
  entities:{},
  loaded: false,
  loading: false
};


export function PizzaReducer(
  state: PizzaState = PizzaInitialState,
  action: fromPizzaActionsCreators.PizzaActions
):PizzaState {

  switch (action.type) {

    case fromPizzaActionsConstants.LOAD_PIZZAS: {

      return {
        ...state,
        loading: true
      }
    }

    case fromPizzaActionsConstants.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;

      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza
          }
        },
        {
          ...state.entities
        });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    }

    case fromPizzaActionsConstants.LOAD_PIZZAS_FAIL: {

      return {
        ...state,
        loading: false,
        loaded: true
      }
    }


  }
  return state
}

// Selectors to get sliced data:
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
