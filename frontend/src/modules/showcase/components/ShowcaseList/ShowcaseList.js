import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Row, Col } from 'react-bootstrap'

import ShowcaseItem from '../ShowcaseItem'
import '../showcase.css'



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

		if (this.props.data.posts) {
			return (
				<div>
					<Row>
						<Col xsOffset={3} xs={6}>
							{this.props.data.posts.map((post) =>
								<ShowcaseItem key={post.id} post={post} />
	            )}
						</Col>
					</Row>
				</div>
			)
		}
	}
}

const ShowcaseQuery = gql`
  query ShowcaseQuery {
    posts(post_type: ["sound"]) {
      id,
      post_title
      post_content,
			post_meta(keys: ["byline"]) {
				meta_key
				meta_value
			}
    }
  }
`

const ShowcaseListWithData = graphql(ShowcaseQuery)(ShowcaseList)

export default ShowcaseListWithData
