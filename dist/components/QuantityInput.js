function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class QuantityInput extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      quantity: 0
    });
  }

  componentDidMount() {
    const {
      base
    } = this.props;
    this.setState({
      quantity: base
    });
  }

  render() {
    const {
      quantity
    } = this.state;
    const {
      step,
      base,
      onIncrement,
      onDecrement
    } = this.props;
    return React.createElement("div", {
      className: "quantity-input"
    }, React.createElement(FontAwesomeIcon, {
      icon: faMinusCircle,
      className: classNames({
        toggler: true,
        inactive: quantity <= base
      }),
      onClick: async () => {
        let value = Math.max(base, quantity - step);
        await this.setState({
          quantity: value
        });
        onDecrement && onDecrement(value);
      }
    }), React.createElement("span", null, quantity), React.createElement(FontAwesomeIcon, {
      icon: faPlusCircle,
      className: "toggler",
      onClick: async () => {
        let value = quantity + step;
        await this.setState({
          quantity: value
        });
        onIncrement && onIncrement(value);
      }
    }));
  }

}

_defineProperty(QuantityInput, "defaultProps", {
  base: 0,
  step: 1
});

export default QuantityInput;