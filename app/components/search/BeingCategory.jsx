import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import BeingItem from './BeingItem'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './search.scss'

class BeingCategory extends React.Component {

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
              <BeingItem key={post.id} post={post} />
            )}

          </div>

        </MuiThemeProvider>

      )
    }
  }
}

const BeingCategoryQuery = gql`
  query BeingCategoryQuery {
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

const BeingCategoryWithData = graphql(BeingCategoryQuery)(BeingCategory)

export default BeingCategoryWithData
