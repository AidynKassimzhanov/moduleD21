import { combineReducers } from 'redux';
import concertReducer from './concertReducer';


const rootReducer = combineReducers({
  concerts: concertReducer,
});

export default rootReducer;