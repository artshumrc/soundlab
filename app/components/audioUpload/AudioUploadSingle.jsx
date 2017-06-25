import React, {Component, PropTypes} from 'react'
import { gql, graphql } from 'react-apollo'
import PostContent from '../posts/PostContent.js'
import CSSModules from 'react-css-modules'
import styles from '../posts/post.scss'
import Sound from 'react-sound'


@CSSModules(styles, {allowMultiple: true})
class AudioUploadSingle extends Component {

  render() {
    const { loading } = this.props.data

    if (!loading) {
      const { post_title: title, post_content: content} = this.props.data.post

      return (

          <div styleName="main">
            <div styleName="wrapper">
              <img src={this.props.data.post.thumbnail} alt=""/>
              <h1 styleName="title">{title}</h1>
              <h6>{this.props.data.post.byline.meta_value}</h6>
              <h6>{this.props.data.post.date.meta_value}</h6>
              <h6>{this.props.data.post.sound_cloud_link.meta_value}</h6>
              <PostContent content={content}/>
              <Sound
                url="http://localhost:8888/soundlab/wp-content/uploads/2017/06/soundlabtestone.mp3"
                playStatus={Sound.status.PLAYING}
                //playFromPosition={300 /* in milliseconds */}
                //onLoading={this.handleSongLoading}
                //onPlaying={this.handleSongPlaying}
                //onFinishedPlaying={this.handleSongFinishedPlaying}
              />
            </div>

          </div>

      )
    }

    return <div></div>
  }
}

AudioUploadSingle.propTypes = {
  data: PropTypes.object
}

const AudioUploadSingleQuery = gql`
  query getPost($post: String){
    post(name:$post){
      id
      post_title
      post_name
      post_content
      thumbnail
      byline {
        meta_value
      }
      date {
        meta_value
      }
      sound_cloud_link {
        meta_value
      }

    },

  }
`

const AudioUploadSingleWithData = graphql(AudioUploadSingleQuery, {
  options: ({params}) => ({
    variables: {
      post: params.post
    }
  })
})(AudioUploadSingle)

export default AudioUploadSingleWithData
