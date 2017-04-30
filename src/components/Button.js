/**
 * Generic button component. Probably overkill for a small demo like this, but it would be useful in a larger app.
 */
import React from 'react';

const Button = ({ label, onClick }) => (
  <button className="btn btn-info btn-sm" onClick={onClick}>{label}</button>
);

export default Button;

