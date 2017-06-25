import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PlaylistItem from './PlaylistItem'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './playlist.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'


class PlaylistList extends React.Component {

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

          <row>
            <Col xsOffset={3} xs={6}>
              <h4>{this.props.data.posts.post}</h4>
              {this.props.data.posts.map((post) =>
                <PlaylistItem key={post.id} post={post} />
              )}
            </Col>
          </row>

        </div>`
      </MuiThemeProvider>

      )
    }
  }
}

const PlaylistQuery = gql`
  query PlaylistQuery {
    posts(post_type: "playlist") {
      id,
      post_title
      queue {
        meta_value
      }

    }
  }
`

const PlaylistListWithData = graphql(PlaylistQuery)(PlaylistList)

export default PlaylistListWithData
