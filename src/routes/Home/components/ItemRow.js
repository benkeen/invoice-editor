import React from 'react';
import DeleteIcon from '../../../components/DeleteIcon';
import CurrencyField from '../../../components/CurrencyField';


const ItemRow = ({ itemName, quantity, value, total, deleteItem }) => (
  <div className="row">
    <div className="col-md-4">
      <input type="input" value={itemName} />
    </div>
    <div className="col-md-1">

    </div>
    <div className="col-md-3">
      <CurrencyField value={value} isEditable={true} />
    </div>
    <div className="col-md-3">
      <CurrencyField value={total} isEditable={false} />
    </div>
    <div className="col-md-1">
      <DeleteIcon onClick={deleteItem} />
    </div>
  </div>
);

// TODO:
// changeQuantity
// changePrice
// changeItemName

export default ItemRow;
