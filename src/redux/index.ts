import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkAction } from "redux-thunk";
import Authentication from "./Authentication/Authentication.reducer";
import Products from "./Products/Products.reducer";

const reducers = combineReducers({
  products: Products,
  authentication: Authentication,
});

const persistedReducer = persistReducer(
  {
    key: "algastock",
    storage,
    blacklist: ["products"],
  },
  reducers
);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const persistor = persistStore(store);

export interface Action<T = any> {
  type: string;
  payload?: T;
}

export type RootState = ReturnType<typeof reducers>;

export type Thunk<T = any> = ThunkAction<void, RootState, unknown, Action<T>>;

export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>;

export { store, persistor };
