import React from 'react'
import { Label } from 'bloomer'
import classNames from 'classnames'

class CustomInput extends React.Component {
  state = {}

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
    const { label, innerRef, ...rest } = this.props
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

        <input
          onChange={this._onChange}
          {...rest}
          value={value || ''}
          ref={innerRef}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          className={classNames('input', { value: hasValue })}
        />
      </div>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <CustomInput innerRef={ref} {...props} />
))
