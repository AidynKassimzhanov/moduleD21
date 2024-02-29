import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import showReducer from './showReducer';
import showSeatingReducer from './showSeatingReducer';
import bookingReducer from './bookingReducer';
import ticketReducer from './ticketReducer';

const rootReducer = combineReducers({
  show: showReducer,
  seatings: showSeatingReducer,
  booking: bookingReducer,
  tickets: ticketReducer,
  // Другие слайсы здесь, если есть
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;