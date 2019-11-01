import React from 'react'
import { Button } from 'bloomer'

export default ({ className, ...rest }) => (
  <Button className={`primary ${className}`} {...rest} />
)
