import React from 'react'

export default ({ label, id, tabIndex, large, ...rest }) => (
  <div>
    <input
      className={`checkbox ${large ? 'large' : null}`}
      type="checkbox"
      id={id || 'checkbox1'}
      {...rest}
    />
    <label htmlFor={id || 'checkbox1'} tabIndex={tabIndex}>
      {label}
    </label>
  </div>
)
