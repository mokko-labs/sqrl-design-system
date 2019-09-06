import React, { PureComponent } from 'react'
import Styles from './inPlaceNotification.module.scss'

class Notification extends PureComponent {
  message = ''

  state = {
    isActive: false
  }

  openNotification = (message = 'A message') => {
    this.message = message
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
            isActive ? [Styles.notification, Styles.show].join(' ') : Styles.notification
          }
        >
          {this.message}
        </div>
      </div>
    )
  }
}

export default Notification
