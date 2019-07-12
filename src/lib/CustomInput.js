import React from 'react'
import { Input, Control, Label } from 'bloomer'
import classNames from 'classnames'

export default class CustomInput extends React.Component {
  state = {
    value: ''
  }

  _onFocus = () => {
    this.setState({
      focus: true
    })
  }

  _onBlur = () => {
    this.setState({
      focus: false
    })
  }

  _onChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { label, ...rest } = this.props
    const state = this.state

    const hasFocus = (rest && rest.focus) || state.focus
    const value = (rest && rest.value) || state.value

    const shouldFloat = value || hasFocus

    return (
      <div
        className={classNames('sqrl-input', {
          focus: hasFocus,
          value: !!value
        })}
      >
        <Label
          className={classNames({ floating: shouldFloat, focus: hasFocus })}
        >
          {label}
        </Label>
        <Control>
          <Input
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            value={value}
            onChange={this._onChange}
            className={classNames({ value: !!value })}
            {...rest}
          />
        </Control>
      </div>
    )
  }
}
