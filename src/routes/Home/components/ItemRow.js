import React from 'react';
import styled from 'styled-components';

import DeleteIcon from '../../../components/DeleteIcon';
import CurrencyField from '../../../components/CurrencyField';
import QuantityDropdown from './QuantityDropdown';

// this is a styled component [see https://github.com/styled-components/styled-components] for more info
const ItemNameField = styled.input`
  width: 100%;
`;


const ItemRow = (props) => (
  <div className="row">
    <div className="col-md-4">
      <ItemNameField type="input" value={props.itemName} onChange={(e) => props.updateItemName(e.target.value)} />
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
