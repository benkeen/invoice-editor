import React from 'react';
import styled from 'styled-components';

import CurrencyField from '../../../components/CurrencyField';

const SummarySection = styled.div`
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
  padding: 6px;
`;

export const InvoiceSummary = ({ subtotal, taxes, tax, total }) => (
  <SummarySection>
    <div className="row">
      <div className="col-md-7">Subtotal:</div>
      <div className="col-md-5">
        <CurrencyField value={subtotal} isEditable={false} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-7">Tax ({tax * 100}%):</div>
      <div className="col-md-5">
        <CurrencyField value={taxes} isEditable={false} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-7">Total:</div>
      <div className="col-md-5">
        <CurrencyField value={total} isEditable={false} />
      </div>
    </div>
  </SummarySection>
);

export default InvoiceSummary;
