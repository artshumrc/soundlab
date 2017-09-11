import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import {Col, Row, Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './UserProfile.css';

class UserProfile extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { data } = this.props;

		if (data.loading) {
			return (
				<div style={{ color: 'black' }}>
					<h2>loading</h2>
				</div>
			);
		}

		return (
			<div id="userProfile">
				<div className="topBar">
					<span className="title">Profile</span>
				</div>
				<div className="content">
					<h2>My profile</h2>
					<hr />
					<Row>
						<Col lg={6}>
							<Image src="/images/userProfile.jpg" responsive />
						</Col>
						<Col lg={6}>
							<h3>Username: {data.userProfile.username}
							</h3>
							<h3>Name: 
								{data.userProfile.name || 'Update your profile in the settings tab to include your name.'}
							</h3>
							<div className="socialIcons">
								<a href={data.userProfile.twitter || '#twitter'}>
									<FontAwesome name="twitter" />
								</a>
								<a href={data.userProfile.linkedIn || '#linkedin'}>
									<FontAwesome name="linkedin-square" />
								</a>
								<a href={data.userProfile.facebook || '#facebook'}>
									<FontAwesome name="facebook-official" />
								</a>
							</div>
							<p>
								{data.userProfile.bio || 'Update your profile in the settings tab to include a bio.'}
							</p>
							<ListGroup className="contactDetails">
								<ListGroupItem>
									<FontAwesome name="paper-plane-o" />
									<div className="details">
										<h5>Email:</h5>
										<span className="value">
											{data.userProfile.email || 'Update your profile in the settings tab to include an email address.'}
										</span>
									</div>
								</ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

UserProfile.propTypes = {
	data: PropTypes.shape({
		userProfile: PropTypes.shape({
			username: PropTypes.string,
			name: PropTypes.string,
			email: PropTypes.string,
			bio: PropTypes.string,
			twitter: PropTypes.string,
			linkedIn: PropTypes.string,
			facebook: PropTypes.string
		}),
		loading: PropTypes.bool
	}).isRequired
};

const userProfile = gql`
query {
	userProfile {
		username,
		name,
		email,
		bio,
		twitter,
		linkedIn,
		facebook
	}
}
`;

export default graphql(userProfile)(UserProfile);
