function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import Styles from './inPlaceNotification.module.scss';

class Notification extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "message", '');

    _defineProperty(this, "type", '');

    _defineProperty(this, "state", {
      isActive: false
    });

    _defineProperty(this, "showNotification", (message = 'A message', type) => {
      this.message = message;
      this.type = type;
      this.setState({
        isActive: true
      }, () => {
        setTimeout(() => {
          this.setState({
            isActive: false
          });
        }, 5000);
      });
    });
  }

  render() {
    const {
      isActive
    } = this.state;
    return React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, React.createElement("div", {
      className: isActive ? [Styles.notification, Styles.show, Styles[this.type]].join(' ') : Styles.notification
    }, this.message));
  }

}

export default Notification;