/**
 * The container component for the Editor Table. This connects the necessary dispatch methods plus the
 * necessary store data to the EditorTable component.
 */
import { connect } from 'react-redux';
import { actions } from '../modules/items';
import EditorTable from '../components/EditorTable';


const mapDispatchToProps = {
  createItem: actions.createItem,
  removeItem: actions.removeItem,
  updateItemName: actions.updateItemName,
  updateQuantity: actions.updateQuantity,
  updatePrice: actions.updatePrice
};


// modifies the data in the store (the one source of truth!) to include a `total` property. The rendering layer handles
// formatting of the value
const addItemTotal = (items) => {
  return items.map((item) => {
    return { ...item, total: item.quantity * item.price }
  });
};

const mapStateToProps = (state) => ({
  items: addItemTotal(state.items)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorTable);
