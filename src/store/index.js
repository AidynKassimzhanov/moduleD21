import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import showReducer from './showReducer';
import showSeatingReducer from './showSeatingReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  show: showReducer,
  seatings: showSeatingReducer,
  booking: bookingReducer,
  // Другие слайсы здесь, если есть
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;