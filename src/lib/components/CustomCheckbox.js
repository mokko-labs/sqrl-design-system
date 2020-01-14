import React from 'react'

export default ({ label, id, tabIndex, ...rest }) => (
  <div className="form-checkbox">
    <input
      className="checkbox"
      type="checkbox"
      id={id || 'checkbox1'}
      {...rest}
    />
    <label for={id || 'checkbox1'} tabIndex={tabIndex}>
      {label}
    </label>
  </div>
)
