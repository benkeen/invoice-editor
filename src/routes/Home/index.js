/**
 * This the point of entry for the "Home" route, which in our case is the whole app. All this file does is
 * render the
 */
import React from 'react';
import styled from 'styled-components';
import InvoiceTable from './containers/InvoiceTableContainer';
import InvoiceSummary from './containers/InvoiceSummaryContainer';

const SummaryWrapper = styled.div`
  float: right; 
  width: 200px;
`;

const Home = (props) => (
  <div className="container-fluid">

    <InvoiceTable
      items={props.items}
      createItem={props.createItem}
      deleteItem={props.deleteItem}
      updateItemName={props.updateItemName}
      updateQuantity={props.updateQuantity}
      updatePrice={props.updatePrice} />

    <SummaryWrapper>
      <InvoiceSummary />
    </SummaryWrapper>

  </div>
);

export default {
  component: Home
};
