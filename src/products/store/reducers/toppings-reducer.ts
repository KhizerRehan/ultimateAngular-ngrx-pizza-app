import * as fromPizzaToppingsActionsConstants from '../actions/topping-actions';
import * as fromPizzaToppingsActionsCreators from '../actions/topping-actions-creators';
import {Topping} from "../../models/topping.model";
import * as fromToppings from '../actions/topping-actions-creators';
export interface ToppingsState {
  entities: {
    [id:number]: Topping
  };
  loaded: boolean;
  loading: boolean;
}
export const PizzaToppingsInitialState: ToppingsState = {
  entities:{},
  loaded: false,
  loading: false
};

export function PizzaToppingsReducer(
  state:ToppingsState = PizzaToppingsInitialState,
  action: fromPizzaToppingsActionsCreators.ToppingsAction
): ToppingsState {

  switch (action.type) {

    case fromPizzaToppingsActionsConstants.LOAD_TOPPINGS: {
      return {
        ...state,
        loading:true
      }
    }
    case fromPizzaToppingsActionsConstants.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;

      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        entities,
        loading:false,
        loaded:true
      }
    }
     case fromPizzaToppingsActionsConstants.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading:false,
        loaded:false
      }
    }
  }
  return state;
}

// selectors to get sliced data of toppings state:
export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
