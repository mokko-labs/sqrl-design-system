import React from 'react'
import { Button } from 'bloomer'
import Loader from './Loader'

export const PrimaryButton = ({ className, busy, children, ...rest }) => {
  return (
    <Button
      className={`primary ${className} ${busy ? 'busy' : null}`}
      {...rest}
    >
      {busy && <Loader color="white" />}
      {!busy && children}
    </Button>
  )
}

export const SecondaryButton = ({ className, busy, children, ...rest }) => {
  return (
    <Button
      className={`secondary ${className} ${busy ? 'busy' : null}`}
      {...rest}
    >
      {busy && <Loader color="white" />}
      {!busy && children}
    </Button>
  )
}

export const TertiaryButton = ({ className, ...rest }) => (
  <Button className={`tertiary ${className}`} {...rest} />
)
