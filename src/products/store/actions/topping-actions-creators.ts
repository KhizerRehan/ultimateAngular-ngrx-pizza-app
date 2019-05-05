import {Action} from "@ngrx/store";
import {Topping} from "../../models/topping.model";
import * as fromPizzaToppingsActionsConstants from './topping-actions';

export class LoadToppings implements Action {
  readonly type = fromPizzaToppingsActionsConstants.LOAD_TOPPINGS;
}

export class LoadToppingsSuccess implements Action {
  readonly type = fromPizzaToppingsActionsConstants.LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

export class LoadToppingsFail implements Action {
  readonly type = fromPizzaToppingsActionsConstants.LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

// Action Types:
export type ToppingsAction =
  | LoadToppings
  | LoadToppingsFail
  | LoadToppingsSuccess;
