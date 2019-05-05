import {Action} from "@ngrx/store";
import * as fromPizzaToppingActions from './topping-actions';
import {Topping} from "../../models/topping.model";

export class LoadToppings implements Action {
  readonly type = fromPizzaToppingActions.LOAD_TOPPINGS;
}

export class LoadToppingsSuccess implements Action {
  readonly type = fromPizzaToppingActions.LOAD_TOPPINGS_SUCCESS;
  constructor(payload: Topping[]) {

  }
}

export class LoadToppingsFail implements Action {
  readonly type = fromPizzaToppingActions.LOAD_TOPPINGS_FAIL;
  constructor(payload: any) {
  }
}

// Action Types:
export type PizzaToppingsAction = LoadToppings | LoadToppingsSuccess | LoadToppingsFail
