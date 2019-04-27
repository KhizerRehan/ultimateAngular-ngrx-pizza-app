import * as pizzaActions from './pizza-actions';
import {Action} from '@ngrx/store';
import {Pizza} from "../../models/pizza.model";

// Action Creators:
export class LoadPizzas implements Action {
  readonly type = pizzaActions.LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = pizzaActions.LOAD_PIZZAS;

  constructor(public payload: any) {
  }
}

export class LoadPizzasSuccess implements Action {
  readonly type = pizzaActions.LOAD_PIZZAS;

  constructor(public payload: Pizza[]) {
  }
}

// Action Types:
export type PizzaActions = LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
