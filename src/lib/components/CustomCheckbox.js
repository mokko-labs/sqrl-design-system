import React from 'react'

export default ({ label, id, tabIndex, ...rest }) => (
  <div class="form-checkbox">
    <input class="checkbox" type="checkbox" id={id || 'checkbox1'} {...rest} />
    <label for={id || 'checkbox1'} tabIndex={tabIndex}>
      {label}
    </label>
  </div>
)
