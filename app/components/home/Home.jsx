import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowcaseList from '../showcase/ShowcaseList'
import PlaylistList from '../playlist/PlaylistList'
import AudioPlayer from '../audioPlayer/AudioPlayer'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import styles from './home.scss'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})

class Home extends React.Component {



  render() {


    return (
      <MuiThemeProvider>

        <div>
          <svg width="1600px" height="1400px" styleName="cover-lines">
            <path d="M0,56 C400,300 500,895 1494,950" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,86 C440,340 500,895 1494,960" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,116 C480,380 500,895 1494,970" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,146 C520,420 500,895 1494,980" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,176 C560,460 500,895 1494,990" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,206 C600,500 500,895 1494,1000" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,236 C640,540 500,895 1494,1010" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,266 C680,580 500,895 1494,1020" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,296 C720,620 500,895 1494,1030" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,316 C760,660 500,895 1494,1040" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,346 C800,700 500,895 1494,1050" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,376 C840,740 500,895 1494,1060" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,406 C880,800 500,895 1494,1070" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,436 C920,850 500,895 1494,1080" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,466 C960,920 500,895 1494,1080" stroke="#fadbd2" fill="transparent"/>

          {/*  <path d="M0,440 C640,800 1400,1250 1694,960" stroke="orange" fill="transparent"/>
              <path d="M0,412 C600,750 1250,1250 1694,940" stroke="purple" fill="transparent"/>
            <path d="M0,412 C560,700 1100,1250 1694,960" stroke="green" fill="transparent"/>
            <path d="M0,412 C520,650 950,1250 1694,980" stroke="blue" fill="transparent"/>
            <path d="M0,412 C480,600 800,1250 1694,1000" stroke="black" fill="transparent"/>
            <path d="M0,412 C440,550 650,1250 1654,1020" stroke="cyan" fill="transparent"/>
            <path d="M0,412 C400,500 500,1250 1654,960" stroke="red" fill="transparent"/> */}




            <path d="M0,440 C440,650 -150,1730 1494,820" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 -100,1670 1494,840" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 -50,1610 1494,860" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 0,1550 1494,880" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 50,1490 1494,900" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 100,1430 1494,920" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,440 C440,650 150,1370 1494,940" stroke="#fadbd2" fill="transparent"/>

            <path d="M0,444 C440,650 200,1310 1494,960" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,448 C440,650 250,1250 1494,980" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,452 C440,650 300,1190 1494,1000" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,456 C440,650 350,1130 1494,1020" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,460 C440,650 400,1070 1494,1040" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,464 C440,650 450,1010 1494,1060" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,468 C440,650 500,950 1494,1080" stroke="#fadbd2" fill="transparent"/>



          {/*  <path d="M0,440 C440,550 70,1250 1494,960" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,444 C440,550 150,1250 1494,980" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,448 C440,550 230,1250 1494,1000" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,452 C440,550 310,1250 1494,1020" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,456 C440,550 390,1250 1494,1040" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,460 C440,550 470,1250 1494,1060" stroke="#fadbd2" fill="transparent"/>
            <path d="M0,464 C440,550 550,1250 1494,1080" stroke="#fadbd2" fill="transparent"/> */}






          </svg>


          <div styleName="site-tag-container">
            <div styleName="tag-container">
              <span styleName="site-tag">We hear you</span>
            </div>
            <div styleName="subtitle-container">
              <span styleName="site-tag-subtitle">The Sound Lab at Harvard University</span>
            </div>
          </div>

          <div>
            <AudioPlayer />
          </div>

        </div>

      </MuiThemeProvider>

    )
  }
}

export default Home
