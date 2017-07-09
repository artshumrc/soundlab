import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import soundmanager from '../../../node_modules/soundmanager2'
import styles from './audioPlayer.scss'
import PlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Pause from 'material-ui/svg-icons/av/pause'
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous'
import SkipNext from 'material-ui/svg-icons/av/skip-next'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import RaisedButton from 'material-ui/RaisedButton'
import Drawer from 'material-ui/Drawer'
import PlaylistList from '../playlist/PlaylistList'
import { resumePlayer, pausePlayer, nextTrack, previousTrack } from '../../actions/actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

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
            <div key={index} className={styles.currentPlayMeta} >
              <div className={styles.playerAvatar}>
                <img src={playlistItem.image} alt={playlistItem.title}/>
              </div>
              <div className={styles.playerMeta}>
                <h6 className={styles.playerMetaCreator}>{playlistItem.creator}</h6>
                <h6 className={styles.playerMetaTitle}>{playlistItem.title}</h6>
              </div>
            </div>

        )
      }
    })
  }

  render() {

    const playId = this.props.playlist[this.props.ui.currentIndex].id //this.state.playId
    const playitemUrl = this.props.playlist[this.props.ui.currentIndex].url//this.state.playitemUrl
    const playlist = []
      // Array of files you'd like played

    const playButtonStyles = {
      height:36,
      width:36
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
          //document.getElementsByClassName(('progressBar')[0].style.width =  25 + '%')
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

              <div className={styles.soundlabPlayer}>
                <div className={styles.soundlabPlayerContainer}>
                  <div className={styles.playerMetaContainer}>
                    {this.createListItems()}
                  </div>
                  <div className={styles.playerTimeline}>
                    <div className={styles.currentTrack}>
                      <div className={styles.progressBar} ref={this.progressBar}></div>
                    </div>

                  </div>
                  <div className={styles.playerControls}>
                    <RaisedButton
                      label="Playlist"
                      onClick={this.togglePlaylistDrawer.bind(this)}
                      className={styles.playlistButton}
                    />
                    <Drawer width={400} openSecondary={true} open={this.state.open} containerClassName={styles.playlistDrawer} >
                      <PlaylistList />
                    </Drawer>
                    <div className={styles.buttonWrapper}>
                      <SkipPrevious
                        style={playButtonStyles}
                        onClick={this.playPrevious.bind(this, playlist)} />
                      {this.props.ui.isPlaying === true ?
                      <Pause
                        style={playButtonStyles}
                        onClick={this.pauseTheSound.bind(this)} />
                      :
                      <PlayArrow
                        style={playButtonStyles}
                        onClick={this.resumeTheSound.bind(this)} />
                      }
                      <SkipNext
                        style={playButtonStyles}
                        onClick={this.playNext.bind(this, playlist)} />
                    </div>

                  </div>
                </div>
              </div>

          </Col>
        </row>

      </div>
    )
  }
}

AudioPlayer.propTypes = {
  playlist: PropTypes.array,
}

function mapStateToProps(state){
  return {
    ui:state.ui,
    playlist:state.playlist
  }
}

export default connect(mapStateToProps)(AudioPlayer)
