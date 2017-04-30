import React from 'react';
import Button from '../../../components/button';
import ItemRow from './ItemRow';


const EditorTable = ({ items, createItem, deleteItem, updateItemName, updateQuantity, updatePrice }) => (
  <div className="table">
    <div className="row">
      <div className="col-md-4">Item Name</div>
      <div className="col-md-1">Quantity</div>
      <div className="col-md-3">Price</div>
      <div className="col-md-3">Total</div>
      <div className="col-md-1"></div>
    </div>

    {items.map((item) => (
      <ItemRow
        key={item.id}
        itemName={item.name}
        quantity={item.quantity}
        price={item.price}
        total={item.total}
        deleteItem={() => deleteItem(item.id)}
        updateItemName={(itemName) => updateItemName(item.id, itemName)}
        updateQuantity={(quantity) => updateQuantity(item.id, quantity)}
        updatePrice={(price) => updatePrice(item.id, price)}
      />
    ))}

    <Button label="New Item" onClick={() => createItem()} />
  </div>
);

export default EditorTable;
