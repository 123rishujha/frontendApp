import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux/es/exports";
import { legacy_createStore,combineReducers,applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { AppReducer } from "./app/app.reducer";
import { authReducer } from "./auth/auth.reducer";



const rootReducer = combineReducers({AppReducer,authReducer});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType< typeof store.getState>;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

