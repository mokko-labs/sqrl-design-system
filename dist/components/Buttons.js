function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Button } from 'bloomer';
import Loader from './Loader';
export const PrimaryButton = ({
  className,
  busy,
  children,
  ...rest
}) => {
  return React.createElement(Button, _extends({
    className: `primary ${className} ${busy ? 'busy' : null}`
  }, rest), busy && React.createElement(Loader, {
    color: "white"
  }), !busy && children);
};
export const SecondaryButton = ({
  className,
  busy,
  children,
  ...rest
}) => {
  return React.createElement(Button, _extends({
    className: `secondary ${className} ${busy ? 'busy' : null}`
  }, rest), busy && React.createElement(Loader, {
    color: "white"
  }), !busy && children);
};
export const TertiaryButton = ({
  className,
  ...rest
}) => React.createElement(Button, _extends({
  className: `tertiary ${className}`
}, rest));
export const FlatButton = props => React.createElement(Button, _extends({
  className: 'flat'
}, props));