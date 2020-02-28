import React, { PureComponent } from 'react'
import Styles from './inPlaceNotification.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faQuestionCircle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'

class Notification extends PureComponent {
  message = ''
  type = ''
  timeoutID = null

  state = {
    isActive: false
  }

  showNotification = (message = 'A message', type) => {
    this.message = message
    this.type = type
    this.setState({ isActive: true }, () => {
      this.timeoutID = setTimeout(() => {
        this.setState({ isActive: false })
      }, 5000)
    })
  }

  cancelNotification = () => {
    if (this.timeoutID) {
      this.setState({ isActive: false })
      clearTimeout(this.timeoutID)
    }
  }

  render() {
    let icon = null
    let iconColor = null

    switch (this.type) {
      case 'success':
        icon = faCheckCircle
        iconColor = '#13aa37'
        break
      case 'warn':
        icon = faExclamationCircle
        iconColor = '#faae1d'
        break
      case 'error':
        icon = faExclamationTriangle
        iconColor = '#e26a3d'
        break
      case 'question':
        icon = faQuestionCircle
        iconColor = '#419bf9'
        break
      case 'info':
        icon = faInfoCircle
        iconColor = '#8e8e8e'
        break
      default:
        icon = faCheckCircle
        iconColor = '#13aa37'
        break
    }

    const { isActive } = this.state
    return (
      <div style={{ position: 'relative' }}>
        <div
          className={
            isActive
              ? [Styles.notification, Styles.show, Styles[this.type]].join(' ')
              : Styles.notification
          }
        >
          <div className={Styles.content}>
            <FontAwesomeIcon icon={icon} color={iconColor} size="2x" />
            <span style={{ marginLeft: 8, marginRight: 20 }}>
              {this.message}
            </span>
            <FontAwesomeIcon
              icon={faTimes}
              color="#000"
              onClick={this.cancelNotification}
              style={{ marginLeft: 'auto' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Notification
