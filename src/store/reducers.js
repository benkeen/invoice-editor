import { combineReducers } from 'redux';
import itemReducer from '../routes/Home/modules/items';
import taxReducer from '../routes/Home/modules/taxes';

export const makeRootReducer = () => {
  return combineReducers({
    items: itemReducer,
    tax: taxReducer
  });
};

export default makeRootReducer;
