/**
 * Contains actions, action types and the reducer for the invoice table items.
 */

// blurgh. Super verbose.... pity you can't really `const` an entire object...
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_ITEM_NAME = 'UPDATE_ITEM_NAME';
const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
const UPDATE_ITEM_PRICE = 'UPDATE_ITEM_PRICE';

// provides a convenient unique key to each item in the invoice
let nextId = 1;


// ------- Actions -------

// we define the default content to be added here so that potentially this action could be re-used in creating
// a new item with different default values
function addItem (name = "", quantity = "", price = "") {
  console.log('adding??');

  return {
    type: ADD_ITEM,
    payload: { id: nextId++, name, quantity, price }
  };
}

function removeItem (id) {
  return {
    type: REMOVE_ITEM,
    payload: id
  };
}

function updateItemName (id, itemName) {
  return {
    type: UPDATE_ITEM_NAME,
    payload: { id, itemName }
  };
}

function updateQuantity (id, quantity) {
  return {
    type: UPDATE_ITEM_QUANTITY,
    payload: { id, quantity }
  };
}

function updatePrice (id, price) {
  return {
    type: UPDATE_ITEM_PRICE,
    payload: { id, price }
  };
}

export const actions = {
  addItem,
  removeItem,
  updateItemName,
  updateQuantity,
  updatePrice
};


// ------- Reducer -------

// convenient shorthand for doing away with a `switch` in our reducer. This tracks all the action types we're interested
// in, and returns a new array for the store
const ACTION_HANDLERS = {
  [ADD_ITEM]: (state, newItem) => [...state, newItem]
};

export default function itemReducer (state = [], action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action.payload) : state;
}
