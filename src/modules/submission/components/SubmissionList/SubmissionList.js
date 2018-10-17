import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import SubmissionItem from './SubmissionItem'
import './submission.css'
import { Grid, Row, Col } from 'react-bootstrap'


class SubmissionList extends React.Component {

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
				<Row>
					<Col>
						{this.props.data.posts.map((post) =>
							<SubmissionItem key={post.id} post={post} />
            )}
					</Col>
				</Row>
			)
		}
	}
}

export default SubmissionList;
