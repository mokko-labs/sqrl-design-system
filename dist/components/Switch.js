function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Switch from 'react-switch';
export default (props => React.createElement(Switch, _extends({}, props, {
  onColor: "#99d5be",
  onHandleColor: "#009A5D",
  handleDiameter: 20,
  uncheckedIcon: false,
  checkedIcon: false,
  boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2)" //    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
  ,
  height: 14,
  width: 34
})));