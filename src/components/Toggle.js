import React from 'react';

// https://www.npmjs.com/package/use-dark-mode
const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);
export default Toggle;
