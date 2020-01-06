import React from 'react'

export default ({ className, ...props }) => (
  <div className={`styled-line ${className}`} {...props}></div>
)
