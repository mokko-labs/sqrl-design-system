import React from 'react'
import ReactSlider from 'react-slider'

export default props => (
  <ReactSlider
    className="sqrl-horizontal-slider"
    thumbClassName="sqrl-thumb"
    trackClassName="sqrl-track"
    {...props}
  />
)
