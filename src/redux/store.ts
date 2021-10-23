import thunk from 'redux-thunk';
import reducer from './reducer';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const store = configureStore({
  reducer,
  // 不要直接写数组，否则会把toolkit中封装的默认middleware覆盖
  // 可以不加thunk，redux-toolkit默认安装了thunk
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), thunk, logger]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
