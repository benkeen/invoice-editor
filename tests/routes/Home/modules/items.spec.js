import {
  DEFAULT_ITEM,
  CREATE_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM_NAME,
  resetNextId,
  default as itemReducer
} from 'routes/Home/modules/items';

function assertIsDefault(state) {
  expect(state.length).to.equal(1);
  expect(state[0]).to.equal(DEFAULT_ITEM);
}

describe('ItemReducer', () => {

  afterEach(() => {
    console.log('resetting');
    resetNextId();
  });

  const customName = 'Rick Astley: Greatest Hits';
  const customPrice = 1999999;
  const customQuantity = 100;
  const customId = 12345;

  describe('General tests', () => {
    it('Should be a function.', () => {
      expect(itemReducer).to.be.a('function');
    });

    it('Should initialize with a single blank item.', () => {
      assertIsDefault(itemReducer(undefined, {}));
    });

    it('State should remain unchanged after we trigger an unknown action type', () => {
      let state = itemReducer(undefined, {});
      assertIsDefault(state);

      state = itemReducer(state, {type: 'CLICK_PENGUIN_BUTTON'});
      assertIsDefault(state);
    });
  });

  describe('Adding items', () => {
    it('Adding a new blank item', () => {
      let state = itemReducer(undefined, {});
      expect(state.length).to.equal(1);
      state = itemReducer(state, { type: CREATE_ITEM });
      expect(state.length).to.equal(2);
      state = itemReducer(state, { type: CREATE_ITEM });
      expect(state.length).to.equal(3);
    });

    it('Adding a new item with custom values', () => {
      let state = itemReducer(undefined, {});
      expect(state.length).to.equal(1);

      state = itemReducer(state, {
        type: CREATE_ITEM,
        payload: {
          name: customName,
          price: customPrice,
          quantity: customQuantity
        }
      });

      expect(state.length).to.equal(2);
      expect(state[1].name).to.equal(customName);
      expect(state[1].price).to.equal(customPrice);
      expect(state[1].quantity).to.equal(customQuantity);
    });

    it('Confirm the item ID cannot be set from outside', () => {
      let state = itemReducer(undefined, {});
      expect(state.length).to.equal(1);

      state = itemReducer(state, {
        type: CREATE_ITEM,
        payload: {
          id: customId,
          name: customName,
          price: customPrice,
          quantity: customQuantity
        }
      });
      expect(state[1].name).to.equal(customName);
      expect(state[1].id).to.not.equal(customId);
    });
  });

  describe('Deleting items', () => {
    it('Deleting an item works as expected', () => {
      let state = itemReducer([], { type: CREATE_ITEM });
      expect(state[0].id).to.equal(0);
      state = itemReducer(state, { type: CREATE_ITEM });
      expect(state[1].id).to.equal(1);
      state = itemReducer(state, { type: CREATE_ITEM });
      expect(state[2].id).to.equal(2);

      state = itemReducer(state, { type: DELETE_ITEM, payload: 1 });
      expect(state[0].id).to.equal(0);
      expect(state[1].id).to.equal(2);
    });
  });

  describe('Updating an item property', () => {
    it('Updates an item name', () => {
      let state = itemReducer(undefined, {});
      expect(state.length).to.equal(1);

      state = itemReducer(state, {
        type: CREATE_ITEM,
        payload: {
          name: customName,
          price: customPrice,
          quantity: customQuantity
        }
      });
      expect(state[1].name).to.equal(customName);

      const newName = 'Chuck Norris: World\'s Greatest Human';
      state = itemReducer(state, { type: UPDATE_ITEM_NAME, payload: { id: 0, itemName: newName }});
      expect(state[1].name).to.equal(newName);
    });
  });

});
