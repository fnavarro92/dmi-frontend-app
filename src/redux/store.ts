import { combineReducers, createStore } from '@reduxjs/toolkit';
import showReducer from './reducers/showReducer';

export const rootReducer = combineReducers({
  showReducer: showReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };