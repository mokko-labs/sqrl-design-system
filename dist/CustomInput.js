function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Input, Control, Label } from 'bloomer';
import classNames from 'classnames';
export default class CustomInput extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: ''
    });

    _defineProperty(this, "_onFocus", () => {
      this.setState({
        focus: true
      });
    });

    _defineProperty(this, "_onBlur", () => {
      this.setState({
        focus: false
      });
    });

    _defineProperty(this, "_onChange", event => {
      this.setState({
        value: event.target.value
      });
    });
  }

  render() {
    const {
      label,
      ...rest
    } = this.props;
    const state = this.state;
    const hasFocus = rest && rest.focus || state.focus;
    const value = rest && rest.value || state.value;
    const shouldFloat = value || hasFocus;
    return React.createElement("div", {
      className: classNames('sqrl-input', {
        focus: hasFocus,
        value: !!value
      })
    }, React.createElement(Label, {
      className: classNames({
        floating: shouldFloat,
        focus: hasFocus
      })
    }, label), React.createElement(Control, null, React.createElement(Input, _extends({
      onFocus: this._onFocus,
      onBlur: this._onBlur,
      value: value,
      onChange: this._onChange,
      className: classNames({
        value: !!value
      })
    }, rest))));
  }

}