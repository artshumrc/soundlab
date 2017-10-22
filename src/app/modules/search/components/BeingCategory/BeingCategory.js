import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CSSModules from 'react-css-modules'
import BeingItem from './BeingItem'
import styles from './search.scss'


@CSSModules(styles, {allowMultiple: true})

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

    if (this.props.data.category.posts) {
      return (
        <div>
          {this.props.data.category.posts.map((post) =>
            <BeingItem key={post.id} post={post} />
          )}
        </div>
      )
    }
  }
}

const BeingCategoryQuery = gql`
  query BeingCategoryQuery {
    category(term_id:3) {
      posts(post_type: "sound") {
        id
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
