/**
 * Generic component to display a number in currency format with cents - either readonly or editable
 */
import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';


const CurrencyField = ({ isEditable, value, onChange }) => (
  <NumberFormat value={value} displayType={isEditable ? 'input' : 'text'} prefix="$" thousandSeparator={true}
    onChange={(e, newValue) => onChange(newValue)} decimalPrecision={2} />
);
CurrencyField.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func
};
CurrencyField.defaultProps = {
  onChange: () => {}
};

export default CurrencyField;
