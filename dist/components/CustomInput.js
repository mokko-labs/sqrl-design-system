function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Label } from 'bloomer';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class CustomInput extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      inputType: this.props.type
    });

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
      style,
      type,
      ...rest
    } = this.props;
    const {
      inputType
    } = this.state;
    const state = this.state;
    const hasFocus = state.focus;
    const value = rest && rest.value || state.value;
    const hasValue = value && value.length > 0;
    const shouldFloat = value || hasFocus;
    return React.createElement("div", {
      className: classNames('sqrl-input', {
        focus: hasFocus,
        value: hasValue
      }),
      style: style
    }, type === 'password' ? React.createElement(FontAwesomeIcon, {
      className: "password-toggle",
      onClick: this.togglePasswordVisibility.bind(this),
      icon: inputType === 'password' ? faEye : faEyeSlash,
      size: "lg"
    }) : null, React.createElement(Label, {
      className: classNames({
        floating: shouldFloat,
        focus: hasFocus
      })
    }, label), React.createElement("input", _extends({
      onChange: this._onChange
    }, rest, {
      type: inputType || 'text',
      value: value || '',
      ref: innerRef,
      onFocus: this._onFocus,
      onBlur: this._onBlur,
      className: classNames('input', {
        value: hasValue,
        password: type === 'password'
      })
    })));
  }

  togglePasswordVisibility() {
    this.setState({
      inputType: this.state.inputType === 'password' ? 'text' : 'password'
    });
  }

}

export default React.forwardRef((props, ref) => React.createElement(CustomInput, _extends({
  innerRef: ref
}, props)));