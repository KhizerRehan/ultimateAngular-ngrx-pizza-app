import {Params} from "@angular/router";
import {createFeatureSelector, ActionReducerMap} from "@ngrx/store";

import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string,
  queryParams: Params,
  params: Params
}

export interface State {
  rootReudcer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
  rootReudcer:fromRouter.routerReducer
}

// Selector to get Router State
export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
  >('routerReducer');
