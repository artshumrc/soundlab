import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

import styles from './FeaturedTrack.scss'

@CSSModules(styles, {allowMultiple: true})

class FeaturedTrack extends React.Component {

  render() {

    return (

      <div styleName="featured-track-component">
        <div styleName="featured-track-player-container">

        </div>
        <div styleName="featured-track-meta-container">
          <span styleName="featured-track-title">
            <h6>Featured Track</h6>
          </span>
          <span styleName="featured-track-meta-item-title">Mozart / Funk</span>
          <span styleName="featured-track-meta-item-author">Dollie Keller</span>
        </div>
      </div>
    );
  }
}

export default FeaturedTrack
