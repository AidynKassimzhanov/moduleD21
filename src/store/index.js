import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import showReducer from './showReducer';

const rootReducer = combineReducers({
  show: showReducer,
  // Другие слайсы здесь, если есть
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;