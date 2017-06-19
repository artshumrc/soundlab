import React, {Component} from 'react'
import styles from './header.scss'


class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div>
          <h4>Header</h4>
        </div>
      </header>
    )
  }
}

export default Header
