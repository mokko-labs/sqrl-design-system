import React from 'react'
import { Button } from 'bloomer'

export const PrimaryButton = ({ className, ...rest }) => (
  <Button className={`primary ${className}`} {...rest} />
)

export const SecondaryButton = ({ className, ...rest }) => (
  <Button className={`secondary ${className}`} {...rest} />
)

export const TertiaryButton = ({ className, ...rest }) => (
  <Button className={`tertiary ${className}`} {...rest} />
)
