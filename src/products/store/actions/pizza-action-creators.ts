import * as fromPizzaActionsConstants from './pizza-actions';
import {Action} from '@ngrx/store';
import {Pizza} from "../../models/pizza.model";

// Action Creators:
export class LoadPizzas implements Action {
  readonly type = fromPizzaActionsConstants.LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = fromPizzaActionsConstants.LOAD_PIZZAS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadPizzasSuccess implements Action {
  readonly type = fromPizzaActionsConstants.LOAD_PIZZAS_SUCCESS;

  constructor(public payload: Pizza[]) {
  }
}

// Action Types:
export type PizzaActions = LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
