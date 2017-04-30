/**
 * The container component for the Summary component (totals, taxes).
 */
import { connect } from 'react-redux';
import InvoiceSummary from '../components/InvoiceSummary';


const mapStateToProps = (state) => ({
  subtotal: 0,
  taxes: [],
  total: 0,
});

export default connect(mapStateToProps, {})(InvoiceSummary);
