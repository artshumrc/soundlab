import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import RecentUploadItem from './RecentUploadItem'
import styles from './Home.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})


class HomeRecent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: true
		};
	}

	render () {
    const items = [];
		console.log('items are ' + items);
		console.log('props are ' + this.props);
		return (
      <div styleName="recent-section">
        <Row styleName="recent-section-title">
          <div styleName="tag-container">
            <span styleName="site-tag learn-tag">Recent tracks</span>
          </div>

        </Row>
        <Row styleName="recent-track-container">
          {items.map((item, i) => (
            <Col
              lg={4}
              key={item.id}
            >
            <RecentUploadItem
              {...item}
            />
            </Col>
          ))}



      {/*  {this.props.data.posts.map((post) =>
          <RecentUploadItem key={post.id} post={post} />
        ).slice(0,3)} */}
        </Row>
      </div>

		);
	}
}


export default HomeRecent;
