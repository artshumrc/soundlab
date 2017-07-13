import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../shared/header'
import Footer from '../shared/footer'
import InformationItem from './InformationItem'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import styles from './information.scss'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})

class InformationList extends React.Component {

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

        <row >
          <Col xsOffset={3} xs={6} styleName="informationListContainer">
            {this.props.data.posts.map((post) =>
              <InformationItem key={post.id} post={post} />
            )}
          </Col>
        </row>
      </div>
      </MuiThemeProvider>

      )
    }
  }
}

const InformationQuery = gql`
  query InformationQuery {
    posts(post_type: "information") {
      id,
      post_title
      post_name
      post_content,
      info_byline {
        meta_value
      }
    }
  }
`

const InformationListWithData = graphql(InformationQuery)(InformationList)

export default InformationListWithData
