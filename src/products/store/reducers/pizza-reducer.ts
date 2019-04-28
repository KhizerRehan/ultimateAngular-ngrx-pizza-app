import * as fromPizzaActionsConstants from '../actions/pizza-actions';
import * as fromPizzaActionsCreators from '../actions/pizza-action-creators';
import {Pizza} from "../../models/pizza.model";

export interface PizzaState {
  data: Pizza [],
  loaded: boolean;
  loading: boolean;
}

export const PizzaInitialState: PizzaState = {
  data: [
    {
      "name": "Blazin' Inferno",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 4,
          "name": "chili"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        }
      ],
      "id": 1
    }
  ],
  loaded: false,
  loading: false
};


export function PizzaReducer(
  state: PizzaState = PizzaInitialState,
  action: fromPizzaActionsCreators.PizzaActions
) {

  switch (action.type) {

    case fromPizzaActionsConstants.LOAD_PIZZAS: {

      return {
        ...state,
        loading: true
      }
    }

    case fromPizzaActionsConstants.LOAD_PIZZAS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
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
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getAllPizzas = (state: PizzaState) => state.data;
