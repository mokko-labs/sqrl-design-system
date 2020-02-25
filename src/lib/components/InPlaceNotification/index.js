import React, { PureComponent } from 'react'
import Styles from './inPlaceNotification.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faTimes,
  faExclamation
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

    switch (this.type) {
      case 'success':
        icon = faCheck
        break
      case 'error':
        icon = faTimes
        break
      case 'warn':
        icon = faExclamation
        break
      default:
        icon = faCheck
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
            <div className={Styles.icon}>
              <FontAwesomeIcon icon={icon} color="#FFF" />
            </div>
            <span style={{ marginLeft: 8, marginRight: 20 }}>{this.message}</span>
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
