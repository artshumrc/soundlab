import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './search.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import SubmissionItem from '../submission/SubmissionItem'
import AudioUploadItem from '../audioUpload/AudioUploadItem'
import BeingCategory from './BeingCategory'
import TimeCategory from './TimeCategory'
import SearchTools from './SearchTools'



class Search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      //audioUploadChecked: false
      beingFilter: false,
      timeFilter: false,
    }
  }

  static propTypes = {
    data: PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      posts: React.PropTypes.array,
    }).isRequired,
  }

  filterBeing(e) {
    e.preventDefault()
    this.setState({
      beingFilter: !this.state.beingFilter
    })
  }

  filterTime(e) {
    e.preventDefault()
    this.setState({
      timeFilter: !this.state.timeFilter
    })
  }

  render() {
  //  const audioUploadChecked = this.state.audioUploadChecked

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

            <SearchTools
              filterBeing={this.filterBeing.bind(this)}
              filterTime={this.filterTime.bind(this)}
            />

            {this.state.timeFilter === true ?
              <TimeCategory />
            : '' }

            {this.state.beingFilter === true ?
              <BeingCategory />
            : '' }




          </div>

        </MuiThemeProvider>

      )
    }
  }
}

const SearchQuery = gql`
  query SearchQuery {
    posts(post_type: "audio_upload") {
      id,
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
    }
    submission:posts(post_type: "user_submission") {
      id,
      post_title
      post_name
      post_content
      thumbnail
      submission_byline {
        meta_value
      }
      submission_link {
        meta_value
      }
      submission_date {
        meta_value
      }
    }
  }
`

const SearchWithData = graphql(SearchQuery)(Search)

export default SearchWithData

/*

{this.state.audioUploadChecked === true ?
  <div>
    {this.props.data.posts.map((post) =>
      <AudioUploadItem key={post.id} post={post} />
    )}
  </div>
: '' }

{this.props.data.submission.map((post) =>
  <SubmissionItem key={post.id} post={post} />
)}

*/
