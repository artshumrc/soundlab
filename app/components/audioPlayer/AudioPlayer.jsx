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
import $ from 'jquery'

export default class AudioPlayer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      audio:[],
      isPlaying: false,
      playId:'demoSound',
      playitemUrl:'http://localhost:8888/soundlab/wp-content/uploads/2017/06/01-Under-the-Pressure.m4a',
      playIndex:0,
      creator:'War on Drugs',
      title:'Under the Pressure',
      image:'http://localhost:8888/soundlab/wp-content/uploads/2017/06/01-Under-the-Pressure-m4a-image.jpg'

    }
  }

  playTheSound(){

  }

  pausePlayer() {
    soundManager.pause(this.state.playId)
    this.setState({
      isPlaying:false
    })
  }

  resumePlayer() {
    soundManager.play(this.state.playId)
    this.setState({
      isPlaying:true
    })
  }

  showState() {
    console.log(this.state.audio.playlist.creator)
  }

  playNext(audio) {
    soundManager.destroySound(this.state.playId)
    this.setState({
      playId:audio.playlist[this.state.playIndex + 1].id,
      playitemUrl:audio.playlist[this.state.playIndex + 1].url,
      playIndex:this.state.playIndex + 1,
      isPlaying:false,
      creator:audio.playlist[this.state.playIndex + 1].creator,
      title:audio.playlist[this.state.playIndex + 1].title,
      image:audio.playlist[this.state.playIndex + 1].image

    })
  }

  playPrevious(audio) {
    soundManager.destroySound(this.state.playId)
    this.setState({
      playId:audio.playlist[this.state.playIndex - 1].id,
      playitemUrl:audio.playlist[this.state.playIndex - 1].url,
      playIndex: this.state.playIndex - 1,
      isPlaying:false,
      creator:audio.playlist[this.state.playIndex - 1].creator,
      title:audio.playlist[this.state.playIndex - 1].title,
      image:audio.playlist[this.state.playIndex - 1].image

    })
  }





  render() {

    const playId = this.state.playId
    const playitemUrl = this.state.playitemUrl
    const creator = this.state.creator
    const title = this.state.title
    const image = this.state.image

    const audio = []
      // Array of files you'd like played
    audio.playlist = [
      {
        id:'demoSound',
        url: 'http://localhost:8888/soundlab/wp-content/uploads/2017/06/01-Under-the-Pressure.m4a',
        creator: 'War on Drugs',
        title: 'Under the Pressure',
        image: 'http://localhost:8888/soundlab/wp-content/uploads/2017/06/01-Under-the-Pressure-m4a-image.jpg'
      },
      {
        id:'demoSound2',
        url: 'http://localhost:8888/soundlab/wp-content/uploads/2017/06/03-Im-Not-Calling-You-a-Liar.m4a',
        creator: 'Florence and the Machine',
        title: "I'm Not Calling You a Liar",
        image:'http://localhost:8888/soundlab/wp-content/uploads/2017/06/03-Im-Not-Calling-You-a-Liar-m4a-image.jpg'
      },
      {
        id:'demoSound3',
        url: 'http://localhost:8888/soundlab/wp-content/uploads/2017/06/02-The-Dress-Looks-Nice-On-You.m4a',
        creator: 'Sufjan Stevens',
        title: 'The Dress Looks Nice on You',
        image:'http://localhost:8888/soundlab/wp-content/uploads/2017/06/02-The-Dress-Looks-Nice-On-You-m4a-image.jpg'
      }

    ]


    const playButtonStyles = {
      height:36,
      width:36
    }

    function playAudio(playlistId){
        // Default playlistId to 0 if not supplied
        playlistId = playlistId ? playlistId : 0;
        // If SoundManager object exists, get rid of it...
        if (audio.nowPlaying){
          audio.nowPlaying.destruct();
          // ...and reset array key if end reached
          if(playlistId == audio.playlist.length){
              playlistId = 0;
        }
      }
    }

    soundManager.setup({
      onready: function(playlistId) {

        audio.nowPlaying = soundManager.createSound({
          id:playId,
          url: playitemUrl,
          creator: audio.playlist[0].creator,
          title: audio.playlist[0].title,
          autoPlay: false,
          autoLoad: true,
          whileplaying: function() {
          document.getElementsByClassName(('progressBar')[0].style.width =  25 + '%')


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
                    <div className={styles.playerAvatar}>
                      <img src={this.state.image} alt={this.state.title}/>
                    </div>
                    <div className={styles.playerMeta}>
                      <h6 className={styles.playerMetaCreator}>{this.state.creator}</h6>
                      <h6 className={styles.playerMetaTitle}>{this.state.title}</h6>
                    </div>
                  </div>
                  <div className={styles.playerTimeline}>
                    <div className={styles.currentTrack}>
                      <div className={styles.progressBar} ref={this.progressBar}></div>
                    </div>

                  </div>
                  <div className={styles.playerControls}>
                    <div className={styles.buttonWrapper}>
                      <SkipPrevious
                        style={playButtonStyles}
                        onClick={this.playPrevious.bind(this, audio)} />
                      {this.state.isPlaying === true ?
                      <Pause
                        style={playButtonStyles}
                        onClick={this.pausePlayer.bind(this, audio)} />
                      :
                      <PlayArrow
                        style={playButtonStyles}
                        onClick={this.resumePlayer.bind(this, audio)} />
                      }
                      <SkipNext
                        style={playButtonStyles}
                        onClick={this.playNext.bind(this, audio)} />
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
  audio: PropTypes.array
}
