function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default (({
  label,
  id,
  tabIndex,
  large,
  ...rest
}) => React.createElement("div", null, React.createElement("input", _extends({
  className: `checkbox ${large ? 'large' : null}`,
  type: "checkbox",
  id: id || 'checkbox1'
}, rest)), React.createElement("label", {
  htmlFor: id || 'checkbox1',
  tabIndex: tabIndex
}, label)));