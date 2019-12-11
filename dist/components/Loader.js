function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (({
  color,
  className,
  ...rest
}) => {
  const finalColor = color || 'primary';
  return React.createElement("div", _extends({
    className: `spinner ${className}`
  }, rest), React.createElement("div", {
    className: `bounce1 has-background-${finalColor}`
  }), React.createElement("div", {
    className: `bounce2 has-background-${finalColor}`
  }), React.createElement("div", {
    className: `bounce3 has-background-${finalColor}`
  }));
});