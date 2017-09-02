import React, {Component} from 'react'
import styles from './header.scss'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'


@CSSModules(styles, {allowMultiple: true})


class Header extends Component {
  render() {
    return (
      <header styleName="header">
        <div styleName="siteLogoHeader">
          <Link to="/">Sound Lab</Link>
        </div>
        <div styleName="linkContainer">
          <Link to="/uploads">Waves</Link>
          <Link to="/information">Resources</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Join / Login</Link>
      {/*
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/submissions">User Submissions</Link>
        <Link to="/search">Search</Link>
        */}
        </div>
      </header>
    )
  }
}

export default Header
