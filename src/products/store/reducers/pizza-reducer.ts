import * as fromPizzaActionsConstants from '../actions/pizza-actions';
import * as fromPizzaActionsCreators from '../actions/pizza-action-creators';
import {Pizza} from "../../models/pizza.model";

export interface PizzaState {
  data: Pizza [],
  loaded: boolean;
  loading: boolean;
}

export const PizzaInitialState: PizzaState = {
  data: [],
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

      return {
        ...state,
        loading: false,
        loaded: true
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

