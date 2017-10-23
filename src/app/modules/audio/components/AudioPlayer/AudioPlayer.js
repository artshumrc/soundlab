import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Pause from 'material-ui/svg-icons/av/pause'
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous'
import SkipNext from 'material-ui/svg-icons/av/skip-next'
import RaisedButton from 'material-ui/RaisedButton'
import Drawer from 'material-ui/Drawer'
import soundmanager from 'soundmanager2'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

import PlaylistList from '../../../playlist/components/PlaylistList'
import styles from './AudioPlayer.scss'


@CSSModules(styles, {allowMultiple: true})
class AudioPlayer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open:false
    }
  }

  pauseTheSound(){
    this.props.dispatch(pausePlayer())
    soundManager.pause(this.props.playlist[this.props.ui.currentIndex].id)
  }

  resumeTheSound(props){
    this.props.dispatch(resumePlayer())
    soundManager.play(this.props.playlist[this.props.ui.currentIndex].id)
  }

  playNext(props) {
    soundManager.destroySound(this.props.playlist[this.props.ui.currentIndex].id)
    this.props.dispatch(nextTrack())
  }

  playPrevious() {
    soundManager.destroySound(this.props.playlist[this.props.ui.currentIndex].id)
    this.props.dispatch(previousTrack())
  }

  togglePlaylistDrawer() {
    this.setState({
      open:!this.state.open
    })
  }


  createListItems() {
    let currentIndex = 0
    let nextTrack = currentIndex + 1
    let previousTrack = currentIndex - 1

    return this.props.playlist.map((playlistItem, index) => {
      if(index === this.props.ui.currentIndex){
        return (
            <div key={index} styleName="currentPlayMeta" >
              <div styleName="playerAvatar">
                <img src={playlistItem.image} alt={playlistItem.title}/>
              </div>
              <div styleName="playerMeta">
                <h6 styleName="playerMetaTitle">{playlistItem.title}</h6>
                <h6 styleName="playerMetaCreator">{playlistItem.creator}</h6>
              </div>
            </div>
        );
      }
    })
  }

  render() {

    const playId = this.props.playlist[this.props.ui.currentIndex].id //this.state.playId
    const playitemUrl = this.props.playlist[this.props.ui.currentIndex].url//this.state.playitemUrl
    const playlist = []
      // Array of files you'd like played

    const buttonStyles = {
      height:22,
      width:22
    }

    const playButtonStyles = {
      height:26,
      width:26
    }

    function playAudio(playlistId){
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
    }

    soundManager.setup({

      onready: function(playlistId) {

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

        <row>
          <Col xsOffset={3} xs={6}>

              <div styleName="soundlabPlayer">
                <div styleName="soundlabPlayerContainer">
                  <div styleName="playerMetaContainer">
                    {this.createListItems()}
                  </div>
                  {/*<div styleName="playerTimeline">
                    <div styleName="currentTrack">
                      <div styleName="progressBar" ref={this.progressBar}></div>
                    </div>

                  </div>*/}
                  <div styleName="playerControls">
                  {/*  <RaisedButton
                      label="Playlist"
                      onClick={this.togglePlaylistDrawer.bind(this)}
                      styleName="playlistButton"
                    />
                    <Drawer width={400} openSecondary={true} open={this.state.open} containerClassName="playlistDrawer" >
                      <PlaylistList />
                    </Drawer> */}
                    <div styleName="buttonWrapper">
                      <SkipPrevious
                        style={buttonStyles}
                        onClick={this.playPrevious.bind(this, playlist)}
											/>
                      {this.props.ui.isPlaying === true ?
	                      <Pause
	                        style={buttonStyles}
	                        onClick={this.pauseTheSound.bind(this)}
												/>
                      :
	                      <PlayArrow
	                        style={playButtonStyles}
	                        onClick={this.resumeTheSound.bind(this)}
												/>
                      }
                      <SkipNext
                        style={buttonStyles}
                        onClick={this.playNext.bind(this, playlist)} />
                    </div>
                    <div styleName="playTimeWrapper">
                      <span styleName="playTime">0:00 / 0:00</span>
                    </div>
                  </div>
                </div>
              </div>
          </Col>
        </row>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  playlist: PropTypes.array,
}

function mapStateToProps(state){
  return {
    ui:state.ui,
    playlist:state.playlist
  };
}

export default connect(mapStateToProps)(AudioPlayer)
