import { AnyAction, Reducer, combineReducers } from "@reduxjs/toolkit";
import { ReducersMapObject} from '@reduxjs/toolkit';
import { StateSchema, StateSchemaKey, ReducerManager, MountedReducer } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKey[] = []
  const mountedReducers: MountedReducer = {};


  return {
    getReducerMap: () => reducers,
    mountedReducers: () => mountedReducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (let key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer;
      mountedReducers[key] = true;
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      mountedReducers[key] = false;
      combinedReducer = combineReducers(reducers);
    }
  }
}

// const staticReducers = {
//   users: usersReducer,
//   posts: postsReducer
// }

// export function configureStore(initialState) {
//   const reducerManager = createReducerManager(staticReducers)

//   const store = createStore(reducerManager.reduce, initialState)

//   store.reducerManager = reducerManager
// }