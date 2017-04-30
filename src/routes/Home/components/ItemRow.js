import React from 'react';
import styled from 'styled-components';

import DeleteIcon from '../../../components/DeleteIcon';
import CurrencyField from '../../../components/CurrencyField';
import StyledRow from './StyledRow';
import QuantityDropdown from './QuantityDropdown';

const ItemNameField = styled.input`
  width: 100%;
`;

const ItemRow = (props) => (
  <StyledRow className="row">
    <div className="col-md-6">
      <ItemNameField type="input" value={props.itemName} onChange={(e) => props.updateItemName(e.target.value)} />
    </div>
    <div className="col-md-1">
      <QuantityDropdown value={props.quantity} onChange={props.updateQuantity} />
    </div>
    <div className="col-md-2 price-field">
      <CurrencyField value={props.price} isEditable={true} onChange={props.updatePrice} />
    </div>
    <div className="col-md-2 total-field">
      <CurrencyField value={props.total} isEditable={false} />
    </div>
    <div className="col-md-1 delete-item">
      <DeleteIcon onClick={props.deleteItem} />
    </div>
  </StyledRow>
);

export default ItemRow;
