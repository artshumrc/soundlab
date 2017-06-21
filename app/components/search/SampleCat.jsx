import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import GenreItem from './GenreItem'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './search.scss'

class SampleCat extends React.Component {

  constructor(props) {
    super(props)


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
    if (this.props.data.category.posts) {
      return (
        <MuiThemeProvider>

          <div>

            {this.props.data.category.posts.map((post) =>
              <GenreItem key={post.id} post={post} />
            )}

          </div>

        </MuiThemeProvider>

      )
    }
  }
}

const SampleCatQuery = gql`
  query SampleCatQuery {
    category(term_id:3) {
      posts(post_type: "audio_upload") {
        post_title
        post_content
        byline {
          meta_value
        }
        date {
          meta_value
        }
      }
    }
  }
`

const SampleCatWithData = graphql(SampleCatQuery)(SampleCat)

export default SampleCatWithData
