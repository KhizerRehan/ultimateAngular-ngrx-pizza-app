import {Actions, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import * as fromServices from '../../services';
import * as fromPizzaActionsConstants from '../actions';
import * as fromPizzaActionsCreators from '../actions';
import { of } from 'rxjs/observable/of';
import {catchError, map, switchMap} from "rxjs/operators";

@Injectable()
// @ts-ignore
export class PizzasEffects {
  constructor(
    private pizzasService: fromServices.PizzasService,
    private actions$: Actions) {
  }

// @ts-ignore
  @Effect()
  loadPizzas$ = this.actions$.ofType(fromPizzaActionsConstants.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzasService
        .getPizzas()
        .pipe(
          map((pizzas) => new fromPizzaActionsCreators.LoadPizzasSuccess(pizzas)),
          catchError((error) => of(new fromPizzaActionsCreators.LoadPizzasFail(error)))
        )
    })
  )
}
