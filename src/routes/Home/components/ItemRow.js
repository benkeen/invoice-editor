import React from 'react';
import DeleteIcon from '../../../components/DeleteIcon';
import CurrencyField from '../../../components/CurrencyField';
import QuantityDropdown from './QuantityDropdown';


const ItemRow = (props) => (
  <div className="row">
    <div className="col-md-4">
      <input type="input" value={props.itemName} onChange={props.updateItemName} />
    </div>
    <div className="col-md-1">
      <QuantityDropdown value={props.quantity} onChange={props.updateQuantity} />
    </div>
    <div className="col-md-3">
      <CurrencyField value={props.price} isEditable={true} onChange={props.updatePrice} />
    </div>
    <div className="col-md-3">
      <CurrencyField value={props.total} isEditable={false} />
    </div>
    <div className="col-md-1">
      <DeleteIcon onClick={props.deleteItem} />
    </div>
  </div>
);

export default ItemRow;
