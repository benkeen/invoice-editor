/**
 * Some handy methods for computing derived state.
 */
import { createSelector } from 'reselect';

export const itemsSelector = (state) => state.items;
export const taxPercentSelector = (state) => state.taxPercent;

// adds a computed total to each item (quantity * price)
export const itemTotalSelector = createSelector(
  itemsSelector,
  (items) => items.map((item) => ({ ...item, total: item.quantity * item.price }))
);

// tot up all rows to compute the subtotal
export const subtotalSelector = createSelector(
  itemTotalSelector,
  (items) => items.reduce((acc, item) => acc + item.total, 0)
);

// applies taxes
export const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

// our grand total!
export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => subtotal + tax
);
