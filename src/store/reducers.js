import { combineReducers } from 'redux';
import itemReducer from '../routes/Home/modules/items';
import taxPercentReducer from '../routes/Home/modules/taxes';

export const makeRootReducer = () => {
  return combineReducers({
    items: itemReducer,
    taxPercent: taxPercentReducer
  });
};

export default makeRootReducer;
