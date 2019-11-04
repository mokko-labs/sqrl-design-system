import React from 'react'
import Switch from 'react-switch'

export default props => (
  <Switch
    {...props}
    onColor="#99d5be"
    onHandleColor="#009A5D"
    handleDiameter={20}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2)"
    //    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={14}
    width={34}
  />
)
