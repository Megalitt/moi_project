import { LoginSchema } from "features/AuthByUsername";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { CombinedState, EnhancedStore, AnyAction, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from 'react-router-dom';
import { ArticleDetailsSchema } from "entities/Article";
// import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from "pages/ArticleDetailsPage";
import { AddCommentFormSchema } from "features/addCommentForm";
import { ArticlePageSchema } from "pages/ArticlePage";
import { UISchema } from "features/UI";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";
import { rtkApi } from "shared/api/rtkApi";


export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  //Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  // articleDetailsComment?: ArticleDetailsCommentSchema;
  // articleDetailsRecomendations?: ArticleDetailsRecomendationSchema;
  addCommentForm?: AddCommentFormSchema;
  articlePage?: ArticlePageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
  
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducer = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;

  mountedReducers: () => MountedReducer;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArt {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectvalue: T;
  extra: ThunkExtraArt;
  state: StateSchema;
}