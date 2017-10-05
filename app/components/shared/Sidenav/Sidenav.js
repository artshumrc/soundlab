import React, { Component } from 'react'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


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
          <Link to="/uploads"><MenuItem>Audio Uploads</MenuItem></Link>
          <Link to="/submissions"><MenuItem>User Submissions</MenuItem></Link>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}
