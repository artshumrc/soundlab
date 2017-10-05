import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import PlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Pause from 'material-ui/svg-icons/av/pause'
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous'
import SkipNext from 'material-ui/svg-icons/av/skip-next'
import RaisedButton from 'material-ui/RaisedButton'
import Drawer from 'material-ui/Drawer'
import soundmanager from 'soundmanager2'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

import { resumePlayer, pausePlayer, nextTrack, previousTrack } from '../../../../actions/actions'
import FeaturedTrack from '../FeaturedTrack'
import PlaylistList from '../../../playlist/components/PlaylistList'
import styles from './Player.scss'

@CSSModules(styles, {allowMultiple: true})

class Player extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open:false
    }
  }

  componentDidMount() {
    const { index } = this.props
  }

  pauseTheSound(){
    this.props.dispatch(pausePlayer())
    soundManager.pause(this.props.player.id)
  }

  resumeTheSound(props){
    this.props.dispatch(resumePlayer())
    soundManager.play(this.props.player.id)
  }

  playNext(props) {
    soundManager.destroySound(this.props.player.id)
    this.props.dispatch(nextTrack(this.props.player.track))
  }

  playPrevious() {
//    soundManager.destroySound(this.props.playlist[this.props.ui.currentIndex].id)
    this.props.dispatch(previousTrack())
  }

  togglePlaylistDrawer() {
    this.setState({
      open:!this.state.open
    })
  }


  render() {

    const tracks = this.props.tracks || [];

    const { post_content: content, post_title: title, post_name: name, thumbnail, byline } = this.props

    const playId = this.props.player.id
    const playitemUrl = this.props.player.soundCloudLink
    const playlist = []


    const buttonStyles = {
      height:22,
      width:22
    }

    const playButtonStyles = {
      height:26,
      width:26
    }

/*    function playAudio(playlistId){
        // Default playlistId to 0 if not supplied
        playlistId = playlistId ? playlistId : 0;
        // If SoundManager object exists, get rid of it...
        if (playlist.nowPlaying){
          playlist.nowPlaying.destruct();
          // ...and reset array key if end reached
          if(playlistId == playlist.length){
              playlistId = 0;
        }
      }
    } */

    soundManager.setup({

      onready: function() {

        playlist.nowPlaying = soundManager.createSound({
          id:playId,
          url:playitemUrl,
          autoPlay: false,
          autoLoad: true,
          whileplaying: function() {
          //document.getElementsBystyleName(('progressBar')[0].style.width =  25 + '%')
        },
         onfinish: function() {
          // document.getElementById('progressBar').style.width = '0'
           soundManager._writeDebug(this.id + ' finished playing')
          }
        })
      },

      ontimeout: function() {
        // Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
      }
    })

    return (

      <div>

        <Row>

          <Col xsOffset={3} xs={6}>

            <div styleName="soundlabPlayer">

              <div styleName="soundlabPlayerContainer">

                <div styleName="playerMetaContainer">

                  <div styleName="currentPlayMeta" >

                    <div styleName="playerAvatar">
                      <img src={this.props.player.thumbnail} alt={this.props.player.title}/>
                    </div>

                    <div styleName="playerMeta">
                      <h6 styleName="playerMetaTitle">{this.props.player.title}</h6>
                      <h6 styleName="playerMetaCreator">{this.props.player.byline}</h6>
                    </div>

                  </div>

                </div>

                <div styleName="playerControls">

                  <div styleName="buttonWrapper">

                    <SkipPrevious
                    style={buttonStyles}
                    onClick={this.playPrevious.bind(this, playlist)}
                    />

                    {this.props.ui.isPlaying ?

                      <Pause
                      style={buttonStyles}
                      onClick={this.pauseTheSound.bind(this)} />
                      :
                      <PlayArrow
                      style={playButtonStyles}
                      onClick={this.resumeTheSound.bind(this)} />

                    }

                    <SkipNext
                    style={buttonStyles}
                    onClick={this.playNext.bind(this)} />

                  </div>

                  <div styleName="playTimeWrapper">
                  <span styleName="playTime">2:02 / 4:28</span>
                  </div>

                </div>

              </div>

            </div>

          </Col>

        </Row>

      </div>
    )
  }
}

Player.propTypes = {
  index: PropTypes.number,
  post: PropTypes.object,
  track: PropTypes.object
}

function mapStateToProps(state){
  return {

    playlist: state.playlist,
    player: state.player,
    ui: state.ui
  }

}

export default connect(mapStateToProps)(Player)
