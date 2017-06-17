import React, { Component } from 'react'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'


export default class Sidenav extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Drawer
          width={200}
          >
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to="/about"><MenuItem>About</MenuItem></Link>
          <Link to="/contact"><MenuItem>Contact</MenuItem></Link>
          <Link to="/privacy"><MenuItem>Privacy</MenuItem></Link>
          <Link to="/information"><MenuItem>Information</MenuItem></Link>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}
