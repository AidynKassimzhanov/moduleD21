import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import showReducer from './showReducer';
import showSeatingReducer from './showSeatingReducer';

const rootReducer = combineReducers({
  show: showReducer,
  seatings: showSeatingReducer
  // Другие слайсы здесь, если есть
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;