import React from 'react'
import { Label } from 'bloomer'
import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

class CustomInput extends React.Component {
  state = {
    inputType: this.props.type
  }

  _onFocus = evt => {
    this.setState({
      focus: true
    })
    if (this.props.onFocus) {
      this.props.onFocus(evt)
    }
  }

  _onBlur = evt => {
    this.setState({
      focus: false
    })

    if (this.props.onBlur) {
      this.props.onBlur(evt)
    }
  }

  _onChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { label, innerRef, style, type, ...rest } = this.props
    const { inputType } = this.state
    const state = this.state

    const hasFocus = state.focus
    const value = (rest && rest.value) || state.value
    const hasValue = value && value.length > 0

    const shouldFloat = value || hasFocus

    return (
      <div
        className={classNames('sqrl-input', {
          focus: hasFocus,
          value: hasValue
        })}
        style={style}
      >
        {type === 'password' ? (
          <FontAwesomeIcon
            className="password-toggle"
            onClick={this.togglePasswordVisibility.bind(this)}
            icon={inputType === 'password' ? faEye : faEyeSlash}
            size="lg"
          />
        ) : null}

        <Label
          className={classNames({ floating: shouldFloat, focus: hasFocus })}
        >
          {label}
        </Label>

        <input
          onChange={this._onChange}
          {...rest}
          type={inputType || 'text'}
          value={value || ''}
          ref={innerRef}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          className={classNames('input', {
            value: hasValue,
            password: type === 'password'
          })}
        />
      </div>
    )
  }

  togglePasswordVisibility() {
    this.setState({
      inputType: this.state.inputType === 'password' ? 'text' : 'password'
    })
  }
}

export default React.forwardRef((props, ref) => (
  <CustomInput innerRef={ref} {...props} />
))
