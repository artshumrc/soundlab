import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import AudioUploadItem from './AudioUploadItem'
import Sidenav from '../shared/sidenav'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './audioUpload.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'


class AudioUploadList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open: true
    }
  }

  static propTypes = {
    data: PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      posts: React.PropTypes.array,
    }).isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }
    console.log(this.props.data.posts)
    if (this.props.data.posts) {
      return (
      <MuiThemeProvider>
      <div>
        <Sidenav />

        <row>
          <Col xsOffset={3} xs={6}>
            {this.props.data.posts.map((post) =>
              <AudioUploadItem key={post.id} post={post} />
            )}
          </Col>
        </row>

      </div>
      </MuiThemeProvider>

      )
    }
  }
}

const AudioUploadQuery = gql`
  query AudioUploadQuery {
    posts(post_type: "audio_upload") {
      id,
      post_title
      post_name
      post_content,
      byline {
        meta_value
      }
      date {
        meta_value
      }
      sound_cloud_link {
        meta_value
      }
    }
  }
`

const AudioUploadListWithData = graphql(AudioUploadQuery)(AudioUploadList)

export default AudioUploadListWithData
