/**
 * The container component for the Summary component (totals, taxes).
 */
import { connect } from 'react-redux';
import InvoiceSummary from '../components/InvoiceSummary';
import { addItemTotal } from './InvoiceTableContainer';


// This is obviously wrong. This should build on the already-computed `total`, as should taxes, then total.
// Will get working first, then refactor second...
const computeSubtotal = (items) => addItemTotal(items).reduce((total, curr) => total + curr.total, 0);
const computeTax = (items, tax) => computeSubtotal(items) * tax;
const computeTotal = (items, tax) => computeSubtotal(items) * (1 + tax);


const mapStateToProps = (state) => ({
  subtotal: computeSubtotal(state.items),
  tax: state.tax,
  taxes: computeTax(state.items, state.tax),
  total: computeTotal(state.items, state.tax)
});

export default connect(mapStateToProps, {})(InvoiceSummary);
