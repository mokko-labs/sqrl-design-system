function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Label } from 'bloomer';
import classNames from 'classnames';

class CustomInput extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "_onFocus", evt => {
      this.setState({
        focus: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(evt);
      }
    });

    _defineProperty(this, "_onBlur", evt => {
      this.setState({
        focus: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(evt);
      }
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
      innerRef,
      ...rest
    } = this.props;
    const state = this.state;
    const hasFocus = state.focus;
    const value = rest && rest.value || state.value || '';
    const hasValue = value && value.length > 0;
    const shouldFloat = value || hasFocus;
    return React.createElement("div", {
      className: classNames('sqrl-input', {
        focus: hasFocus,
        value: hasValue
      })
    }, React.createElement(Label, {
      className: classNames({
        floating: shouldFloat,
        focus: hasFocus
      })
    }, label), React.createElement("div", {
      className: classNames('select', {
        value: hasValue,
        focus: hasFocus
      })
    }, React.createElement("select", _extends({
      onChange: this._onChange
    }, rest, {
      value: value,
      ref: innerRef,
      onFocus: this._onFocus,
      onBlur: this._onBlur
    }))));
  }

}

export default React.forwardRef((props, ref) => React.createElement(CustomInput, _extends({
  innerRef: ref
}, props)));