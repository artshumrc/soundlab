import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import TimeItem from './TimeItem'
import styles from './search.scss'
import CSSModules from 'react-css-modules'


@CSSModules(styles, {allowMultiple: true})
class TimeCategory extends React.Component {

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

  render() {

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
            <TimeItem key={post.id} post={post} />
          )}
        </div>
      )
    }
  }
}

const TimeCategoryQuery = gql`
  query TimeCategoryQuery {
    category(term_id:4) {
      posts(post_type: "information") {
        id
        post_title
        post_content
        info_byline {
          meta_value
        }
      }
    }
  }
`

const TimeCategoryWithData = graphql(TimeCategoryQuery)(TimeCategory)

export default TimeCategoryWithData
