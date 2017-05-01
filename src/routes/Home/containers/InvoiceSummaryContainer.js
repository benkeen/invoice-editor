/**
 * The container component for the Summary component (totals, taxes).
 */
import { connect } from 'react-redux';
import InvoiceSummary from '../components/InvoiceSummary';
import { subtotalSelector, taxPercentSelector, taxSelector, totalSelector } from '../modules/summary';


const mapStateToProps = (state) => ({
  subtotal: subtotalSelector(state),
  taxPercent: taxPercentSelector(state),
  taxes: taxSelector(state),
  total: totalSelector(state)
});

export default connect(mapStateToProps, {})(InvoiceSummary);
