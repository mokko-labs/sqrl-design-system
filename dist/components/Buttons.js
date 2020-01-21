function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Button } from 'bloomer';
import Loader from './Loader';
export const PrimaryButton = ({
  className,
  busy,
  children,
  text,
  ...rest
}) => {
  return React.createElement(Button, _extends({
    className: `primary ${className} ${busy ? 'busy' : null} ${text ? 'text' : null}`
  }, rest), busy && React.createElement(Loader, {
    color: "white"
  }), !busy && children);
};
export const SecondaryButton = ({
  className,
  busy,
  children,
  outline,
  ...rest
}) => {
  return React.createElement(Button, _extends({
    className: `secondary ${className} ${busy ? 'busy' : null} ${outline ? 'outline' : null}`
  }, rest), busy && React.createElement(Loader, {
    color: "white"
  }), !busy && children);
};
export const SecondaryAltButton = ({
  className,
  busy,
  children,
  ...rest
}) => {
  return React.createElement(Button, _extends({
    className: `secondary-alt ${className} ${busy ? 'busy' : null}`
  }, rest), busy && React.createElement(Loader, {
    color: "white"
  }), !busy && children);
};
export const TertiaryButton = ({
  className,
  outline,
  text,
  ...rest
}) => React.createElement(Button, _extends({
  className: `tertiary ${className} ${outline ? 'outline' : null} ${text ? 'text' : null}`
}, rest));
export const FlatButton = props => React.createElement(Button, _extends({
  className: 'flat'
}, props));
export const TextLinkButton = ({
  className,
  ...props
}) => React.createElement(Button, _extends({
  className: `text-link ${className}`
}, props));
export const TextCapsLinkButton = ({
  className,
  ...props
}) => React.createElement(Button, _extends({
  className: `text-caps-link ${className}`
}, props));