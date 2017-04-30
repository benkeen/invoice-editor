import React from 'react';
import CurrencyField from '../../../components/CurrencyField';

export const HomeView = () => (
  <div>
    Home component (HomeView) here.
    <CurrencyField value={12345} isEditable={false} />
    <CurrencyField value={12345} isEditable={true} />
  </div>
);

export default HomeView;
