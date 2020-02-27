function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import Styles from './inPlaceNotification.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faExclamation } from '@fortawesome/free-solid-svg-icons';

class Notification extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "message", '');

    _defineProperty(this, "type", '');

    _defineProperty(this, "timeoutID", null);

    _defineProperty(this, "state", {
      isActive: false
    });

    _defineProperty(this, "showNotification", (message = 'A message', type) => {
      this.message = message;
      this.type = type;
      this.setState({
        isActive: true
      }, () => {
        this.timeoutID = setTimeout(() => {
          this.setState({
            isActive: false
          });
        }, 5000);
      });
    });

    _defineProperty(this, "cancelNotification", () => {
      if (this.timeoutID) {
        this.setState({
          isActive: false
        });
        clearTimeout(this.timeoutID);
      }
    });
  }

  render() {
    let icon = null;

    switch (this.type) {
      case 'success':
        icon = faCheck;
        break;

      case 'error':
        icon = faTimes;
        break;

      case 'warn':
        icon = faExclamation;
        break;

      default:
        icon = faCheck;
        break;
    }

    const {
      isActive
    } = this.state;
    return React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, React.createElement("div", {
      className: isActive ? [Styles.notification, Styles.show, Styles[this.type]].join(' ') : Styles.notification
    }, React.createElement("div", {
      className: Styles.content
    }, React.createElement("div", {
      className: Styles.icon
    }, React.createElement(FontAwesomeIcon, {
      icon: icon,
      color: "#FFF"
    })), React.createElement("span", {
      style: {
        marginLeft: 8,
        marginRight: 20
      }
    }, this.message), React.createElement(FontAwesomeIcon, {
      icon: faTimes,
      color: "#000",
      onClick: this.cancelNotification,
      style: {
        marginLeft: 'auto'
      }
    }))));
  }

}

export default Notification;