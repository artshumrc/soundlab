import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import SubmissionItem from './SubmissionItem'
import Sidenav from '../shared/sidenav'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './submission.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'


class SubmissionList extends React.Component {

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
              <SubmissionItem key={post.id} post={post} />
            )}
          </Col>
        </row>

      </div>
      </MuiThemeProvider>

      )
    }
  }
}

const SubmissionQuery = gql`
  query SubmissionQuery {
    posts(post_type: "user_submission") {
      id,
      post_title
      post_name
      post_content,
      submission_byline {
        meta_value
      }
    }
  }
`

const SubmissionListWithData = graphql(SubmissionQuery)(SubmissionList)

export default SubmissionListWithData
