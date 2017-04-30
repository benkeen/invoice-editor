import { combineReducers } from 'redux';
import itemReducer from '../routes/Home/modules/items';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    items: itemReducer,
    ...asyncReducers
  });
};

export default makeRootReducer;
