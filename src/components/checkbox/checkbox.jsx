import React from 'react';

import './checkbox.scss';

const Checkbox = ({ isChecked, caption, onChange }) => {
  return (
    <label className="checkbox">
      <input type="checkbox"  onChange={onChange} checked={isChecked} />
      <span ></span>
      {caption}
    </label>
  );
};

export default Checkbox;
