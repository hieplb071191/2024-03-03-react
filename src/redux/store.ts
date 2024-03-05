import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducer';


const persistConfig = {
    key: process.env.REDUCER_KEY as string,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
    return configureStore({
      reducer: persistedReducer,
    });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const store = setupStore();
