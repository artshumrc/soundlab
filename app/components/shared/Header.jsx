import React, {Component} from 'react'
import styles from './header.scss'
import { Link } from 'react-router'


class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.linkContainer}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/information">Information</Link>
        <Link to="/uploads">Audio Uploads</Link>
        <Link to="/submissions">User Submissions</Link>
        <Link to="/search">Search</Link>
        </div>
      </header>
    )
  }
}

export default Header
