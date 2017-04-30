import React from 'react';
import styled from 'styled-components';

import Button from '../../../components/button';
import ItemRow from './ItemRow';
import StyledRow from './StyledRow';

// pretty up the placement a bit
const Rows = styled.div`
  margin-bottom: 10px;
`;

const InvoiceTable = ({ items, createItem, deleteItem, updateItemName, updateQuantity, updatePrice }) => (
  <div className="table">
    <StyledRow className="row header-row">
      <div className="col-md-6">Item Name</div>
      <div className="col-md-1">Quantity</div>
      <div className="col-md-2">Price</div>
      <div className="col-md-2">Total</div>
      <div className="col-md-1"></div>
    </StyledRow>

    <Rows>
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
    </Rows>

    <Button label="New Item &raquo;" onClick={() => createItem()} />
  </div>
);

export default InvoiceTable;
