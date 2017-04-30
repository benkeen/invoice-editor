import React from 'react';
import Button from '../../../components/button';
import ItemRow from './ItemRow';


const EditorTable = ({ items, addItem, deleteItem }) => (
  <div className="table">
    <div className="row">
      <div className="col-md-4">Item Name</div>
      <div className="col-md-1">Quantity</div>
      <div className="col-md-3">Price</div>
      <div className="col-md-3">Total</div>
      <div className="col-md-1"></div>
    </div>

    {items.map((item) => <ItemRow key={item.id} item={item} deleteItem={() => deleteItem(item.id)} />)}

    <Button label="New Item" onClick={() => {
      console.log(addItem);
      addItem();
    }} />
  </div>
);

export default EditorTable;
