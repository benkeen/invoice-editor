/**
 * Contains actions, action types and the reducer for the invoice table items.
 */

// (exported to allow testing)
export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM_NAME = 'UPDATE_ITEM_NAME';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
export const UPDATE_ITEM_PRICE = 'UPDATE_ITEM_PRICE';

// provides a convenient unique key to each item in the invoice list
let nextId = 0;

// used for testing purposes
export const resetNextId = () => {
  nextId = 0;
};


// ------- Actions -------

// we define the default content to be added here so that potentially this action could be re-used in creating
// a new item with different default values.
function createItem (name = "", quantity = 1, price = 0) {
  return {
    type: CREATE_ITEM,
    payload: {
      id: nextId++,
      name,
      quantity,
      price
    }
  };
}

function deleteItem (id) {
  return {
    type: DELETE_ITEM,
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
  createItem,
  deleteItem,
  updateItemName,
  updateQuantity,
  updatePrice
};


// ------- Reducer -------

// convenience method to update a single prop in an array of objects and return a fresh array
const updateProp = (list, id, propName, newValue) => {
  return list.map((item) => {
    if (item.id === id) {
      item[propName] = newValue;
    }
    return item;
  });
};


// convenient shorthand for doing away with a `switch` in our reducer. This tracks all the action types we're interested
// in, and returns a new array for the store. Truth is, this chunk is a bit too "clever". I wrote it like this to show
// off my es6 skillz - in a real app, I'd lean towards less terse but more readable code.
const ACTION_HANDLERS = {
  [CREATE_ITEM]: (state, newItem) => {
    let copy = Object.assign({}, newItem);
    copy.id = nextId++;
    return [...state, copy];
  },
  [DELETE_ITEM]: (state, id) => state.filter((item) => item.id !== id), // state.filter returns a NEW array, omitting the target item
  [UPDATE_ITEM_NAME]: (state, { id, itemName }) => updateProp(state, id, 'name', itemName),
  [UPDATE_ITEM_QUANTITY]: (state, { id, quantity }) => updateProp(state, id, 'quantity', parseInt(quantity, 10)),
  [UPDATE_ITEM_PRICE]: (state, { id, price }) => updateProp(state, id, 'price', parseFloat(price))
};

export const DEFAULT_ITEM = {
  id: nextId++,
  name: '',
  quantity: 1,
  price: 0
};

export default function itemReducer (state = [DEFAULT_ITEM], action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action.payload) : state;
};
