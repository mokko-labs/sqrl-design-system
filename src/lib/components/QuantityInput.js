import React from 'react'
import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

class QuantityInput extends React.Component {
  state = {
    quantity: 0
  }

  static defaultProps = {
    base: 0,
    step: 1
  }

  componentDidMount() {
    const { base } = this.props
    this.setState({
      quantity: base
    })
  }

  render() {
    const { quantity } = this.state
    const { step, base, onIncrement, onDecrement } = this.props

    return (
      <div className="quantity-input">
        <FontAwesomeIcon
          icon={faMinusCircle}
          className={classNames({
            toggler: true,
            inactive: quantity <= base
          })}
          onClick={async () => {
            let value = Math.max(base, quantity - step)
            await this.setState({ quantity: value })
            onDecrement && onDecrement(value)
          }}
        />

        <span>{quantity}</span>

        <FontAwesomeIcon
          icon={faPlusCircle}
          className="toggler"
          onClick={async () => {
            let value = quantity + step
            await this.setState({ quantity: value })
            onIncrement && onIncrement(value)
          }}
        />
      </div>
    )
  }
}

export default QuantityInput
