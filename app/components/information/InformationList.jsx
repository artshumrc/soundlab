import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../shared/header'
import Footer from '../shared/footer'
import InformationItem from './InformationItem'
import EventList from './EventList'
import AdditionalResourceItem from './AdditionalResourceItem'
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
    const thumbnailListImage = {
        backgroundImage: `url("http://localhost:8888/soundlab/wp-content/uploads/2017/09/mitchel-lensink-236502.jpg")`,
        width: '100%',
        height: '800px',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
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
        <Row styleName="resources-cover-image">
          <Col xs={12} sm={12} md={12} lg={12}>
            <div style={thumbnailListImage}></div>
            <div styleName="cover-inlay">
              <div>
                <span styleName="cover-inlay-title">Intro to Ableton</span>
              </div>
              <div>
                <span styleName="cover-inlay-date">Every Wednesday, 8pm</span>
              </div>
              <div styleName="cover-inlay-description-container">
                <span styleName="cover-inlay-item-description">Stop by the lab any Wednesday evening for an introduction to Ableton, a powerful starter tool for any sound production project.</span>
              </div>

            </div>
          </Col>
        </Row>
        <Row styleName="resource-list-container">
          <Col xs={12} sm={12} md={8} lg={8}>
            <h4 styleName="resource-section-title">Tutorials</h4>
            {this.props.data.posts.map((post) =>
              <InformationItem key={post.id} post={post} />
            )}
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <h4 styleName="resource-section-title">Upcoming Events</h4>
            <EventList/>

          </Col>
      </Row>
      <Row styleName="additional-resources-container">
        <Col xs={12} sm={12} md={12} lg={12}>
          <h4 styleName="resource-section-title">Additional resources</h4>
          {this.props.data.posts.map((post) =>
            <AdditionalResourceItem key={post.id} post={post} />
          )}
        </Col>
      </Row>
      </div>
      </MuiThemeProvider>

      )
    }
  }
}

const InformationQuery = gql`
  query InformationQuery {
    posts(post_type: "information") {
      id
      post_title
      post_name
      post_content
      info_byline {
        meta_value
      }
    }
  }
`

const InformationListWithData = graphql(InformationQuery)(InformationList)

export default InformationListWithData
