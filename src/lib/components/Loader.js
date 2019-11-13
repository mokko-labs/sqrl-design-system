import React from 'react'

export default ({ color, className, ...rest }) => {
  const finalColor = color || 'primary'
  return (
    <div className={`spinner ${className}`} {...rest}>
      <div className={`bounce1 has-background-${finalColor}`}></div>
      <div className={`bounce2 has-background-${finalColor}`}></div>
      <div className={`bounce3 has-background-${finalColor}`}></div>
    </div>
  )
}
