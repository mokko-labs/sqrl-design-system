import React, { PureComponent } from 'react'
import Styles from './inPlaceNotification.module.scss'

class Notification extends PureComponent {
  message = ''
  type = ''

  state = {
    isActive: false,
  }

  showNotification = (message = 'A message', type) => {
    this.message = message
    this.type = type
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false })
      }, 3000)
    })
  }

  render() {
    const { isActive } = this.state
    return (
      <div style={{ position: 'relative' }}>
        <div
          className={
            isActive ? [Styles.notification, Styles.show, Styles[this.type]].join(' ') : Styles.notification
          }
        >
          {this.message}
        </div>
      </div>
    )
  }
}

export default Notification