import {Actions, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import * as fromServices from '../../services';
import * as fromPizzaToppingActionsConstants from '../actions/topping-actions';
import * as fromPizzaToppingActionsCreators from '../actions/topping-actions-creators';
import { of } from 'rxjs/observable/of';
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {Topping} from "../../models/topping.model";

@Injectable()
// @ts-ignore
export class PizzaToppingsEffects {
  constructor(
    private toppingService: fromServices.ToppingsService,
    private actions$: Actions) {
  }

// @ts-ignore
  @Effect()
  loadPizzas$ = this.actions$.ofType(fromPizzaToppingActionsConstants.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingService
        .getToppings()
        .pipe(
          tap((toppings) => console.log('TOPPINGS', toppings)),
          map((toppings: Topping[]) => new fromPizzaToppingActionsCreators.LoadToppingsSuccess(toppings)),
          catchError((error) => of(new fromPizzaToppingActionsCreators.LoadToppingsFail(error)))
        )
    })
  )
}
