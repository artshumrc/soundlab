import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowcaseList from '../showcase/ShowcaseList'
import Header from '../header/header'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './home.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'


class Home extends React.Component {

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
        {/*<nav className={styles.siteSideNav}>*/}
        <Drawer
          open={this.state.open}
          width={200}
          >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>

        <row>
          <Col xsOffset={3} xs={6}>
            {this.props.data.posts.map((post) =>
              <ShowcaseList key={post.id} post={post} />
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
      post_content,
      byline {
        meta_value
      }
    }
  }
`

const HomeWithData = graphql(AudioUploadQuery)(Home)

export default HomeWithData
