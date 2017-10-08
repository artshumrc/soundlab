import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

import ResourceItem from '../ResourceItem'
import ResourceEventList from '../ResourceEventList'
import AdditionalResourceItem from '../AdditionalResourceItem'
import styles from '../resources.scss'

@CSSModules(styles, {allowMultiple: true})

class ResourceList extends React.Component {

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

    if (this.props.data.posts) {
      return (
	      <div>
	        <Row styleName="resources-cover-image">
	          <Col>
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
	          <Col>
	            <h4 styleName="resource-section-title">Tutorials</h4>
	            {this.props.data.posts.map((post) =>
	              <ResourceItem key={post.id} post={post} />
	            )}
	          </Col>
	          <Col>
	            <h4 styleName="resource-section-title">Upcoming Events</h4>
	            <ResourceEventList/>

	          </Col>
	      </Row>
	      <Row styleName="additional-resources-container">
	        <Col>
	          <h4 styleName="resource-section-title">Additional resources</h4>
	          {this.props.data.posts.map((post) =>
	            <AdditionalResourceItem key={post.id} post={post} />
	          )}
	        </Col>
	      </Row>
      </div>
      )
    }
  }
}

const ResourceQuery = gql`
  query ResourceQuery {
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

const ResourceListWithData = graphql(ResourceQuery)(ResourceList)

export default ResourceListWithData
