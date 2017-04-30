/**
 * This the point of entry for the "Home" route, which in our case is the whole app. All this file does is
 * render the
 */
import React from 'react';
import EditorTable from './containers/EditorTableContainer';
import InvoiceSummary from './containers/InvoiceSummaryContainer';

const Home = ({ items, addItem, removeItem }) => (
  <div className="container-fluid">
    <EditorTable
      items={items}
      addItem={addItem}
      removeItem={removeItem} />

    <InvoiceSummary />
  </div>
);

export default {
  component: Home
};
