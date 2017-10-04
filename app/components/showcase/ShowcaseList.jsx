import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ShowcaseItem from './ShowcaseItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import styles from './showcase.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'


@CSSModules(styles, {allowMultiple: true})

class ShowcaseList extends React.Component {

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
            {this.props.data.posts.map((post) =>
              <ShowcaseItem key={post.id} post={post} />
            )}
          </Col>
        </row>

      </div>
      </MuiThemeProvider>

      )
    }
  }
}

const ShowcaseQuery = gql`
  query ShowcaseQuery {
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

const ShowcaseListWithData = graphql(ShowcaseQuery)(ShowcaseList)

export default ShowcaseListWithData
