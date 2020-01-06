import React from 'react'
import { Button } from 'bloomer'
import Loader from './Loader'

export const PrimaryButton = ({ className, busy, children, text, ...rest }) => {
  return (
    <Button
      className={`primary ${className} ${busy ? 'busy' : null} ${
        text ? 'text' : null
      }`}
      {...rest}
    >
      {busy && <Loader color="white" />}
      {!busy && children}
    </Button>
  )
}

export const SecondaryButton = ({
  className,
  busy,
  children,
  outline,
  ...rest
}) => {
  return (
    <Button
      className={`secondary ${className} ${busy ? 'busy' : null} ${
        outline ? 'outline' : null
      }`}
      {...rest}
    >
      {busy && <Loader color="white" />}
      {!busy && children}
    </Button>
  )
}

export const TertiaryButton = ({ className, outline, text, ...rest }) => (
  <Button
    className={`tertiary ${className} ${outline ? 'outline' : null} ${
      text ? 'text' : null
    }`}
    {...rest}
  />
)

export const FlatButton = props => <Button className={'flat'} {...props} />
