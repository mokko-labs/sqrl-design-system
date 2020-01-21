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

export const SecondaryAltButton = ({ className, busy, children, ...rest }) => {
  return (
    <Button
      className={`secondary-alt ${className} ${busy ? 'busy' : null}`}
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

export const TextLinkButton = ({ className, ...props }) => (
  <Button className={`text-link ${className}`} {...props} />
)

export const TextCapsLinkButton = ({ className, ...props }) => (
  <Button className={`text-caps-link ${className}`} {...props} />
)
