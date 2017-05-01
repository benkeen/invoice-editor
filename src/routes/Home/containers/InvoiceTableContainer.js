/**
 * The container component for the Editor Table.
 */
import { connect } from 'react-redux';
import { actions } from '../modules/items';
import InvoiceTable from '../components/InvoiceTable';
import { itemTotalSelector } from '../modules/summary';


const mapDispatchToProps = {
  createItem: actions.createItem,
  deleteItem: actions.deleteItem,
  updateItemName: actions.updateItemName,
  updateQuantity: actions.updateQuantity,
  updatePrice: actions.updatePrice
};

const mapStateToProps = (state) => ({
  items: itemTotalSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceTable);
