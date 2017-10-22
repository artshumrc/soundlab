import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'

import styles from './FeaturedTrack.scss'


@CSSModules(styles, {allowMultiple: true})
class FeaturedTrack extends Component {



  render() {

    //const track = this.props.track;

    //const { post_content: content, post_title: title, post_name: name, thumbnail, byline } = this.props

    return (
      <div styleName="currentPlayMeta" >
        <div styleName="playerAvatar">
        <img src={this.props.player.thumbnail} alt=""/>
        </div>
        <div styleName="playerMeta">
          <h6 styleName="playerMetaTitle">{this.props.player.title}</h6>
          <h6 styleName="playerMetaCreator">{this.props.player.byline}</h6>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    player: state.player
  }
}

export default connect(mapStateToProps)(FeaturedTrack)
