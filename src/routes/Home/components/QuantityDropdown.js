/**
 * The quantity dropdown. Feels kinda specific, so I stuck it here in the route's components folder than the top-level
 * generic components folder.
 */
import React from 'react';


const QuantityDropdown = ({ value, onChange }) => (
  <select defaultValue={value} onChange={onChange}>
    {[1,2,3,4,5,6,7,8,9,10,15,20].map((value) => (
      <option value={value} key={value}>{value}</option>
    ))}
  </select>
);

export default QuantityDropdown;
