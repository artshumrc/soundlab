import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import RecentUploadItem from './RecentUploadItem'
import styles from './Home.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})


class HomeRecent extends Component {


	render () {
    const items = this.props.items || [];
	
		return (
      <div styleName="recent-section">
        <Row styleName="recent-section-title">
          <div styleName="tag-container">
            <span styleName="site-tag learn-tag">Recent tracks</span>
          </div>

        </Row>
        <Row styleName="recent-track-container">
          {items.map((item, i) => (

            <RecentUploadItem
							key={item.id}
              {...item}
							index={i}

            />

          )).splice(0,3)}



      {/*  {this.props.data.posts.map((post) =>
          <RecentUploadItem key={post.id} post={post} />
        ).slice(0,3)} */}
        </Row>
      </div>

		);
	}
}


export default HomeRecent;
