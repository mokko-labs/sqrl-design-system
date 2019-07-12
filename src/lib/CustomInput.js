import React from 'react'
import { Input, Control, Label } from 'bloomer'
import classNames from 'classnames'

export default class CustomInput extends React.Component {
  state = {}

  _onFocus = evt => {
    this.setState({
      focus: true
    })
    if (this.props.onFocus) {
      this.props.onFocus(evt)
    }
    if (this.props.field && this.props.field.onFocus) {
      this.props.field.onFocus(evt)
    }
  }

  _onBlur = evt => {
    this.setState({
      focus: false
    })

    if (this.props.onBlur) {
      this.props.onBlur(evt)
    }
    if (this.props.field && this.props.field.onBlur) {
      this.props.field.onBlur(evt)
    }
  }

  _onChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { label, ...rest } = this.props
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
      >
        <Label
          className={classNames({ floating: shouldFloat, focus: hasFocus })}
        >
          {label}
        </Label>
        <Control>
          {this.props.input ? (
            this.props.input
          ) : (
            <Input
              onChange={this._onChange}
              className={classNames({ value: hasValue })}
              {...rest}
              value={value || ''}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
            />
          )}
        </Control>
      </div>
    )
  }
}
