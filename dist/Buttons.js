function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Button } from 'bloomer';
export const PrimaryButton = ({
  className,
  ...rest
}) => React.createElement(Button, _extends({
  className: `primary ${className}`
}, rest));
export const SecondaryButton = ({
  className,
  ...rest
}) => React.createElement(Button, _extends({
  className: `secondary ${className}`
}, rest));
export const TertiaryButton = ({
  className,
  ...rest
}) => React.createElement(Button, _extends({
  className: `tertiary ${className}`
}, rest));