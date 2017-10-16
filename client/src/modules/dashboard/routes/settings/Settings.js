import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import autoBind from 'react-autobind';

import './Settings.css';

class Settings extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
	}

	submit(values) {
		const { mutate } = this.props;
		mutate({
			variables: {
				user: {
					...values
				},
			},
		});
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
			<div>
				<div className="topBar">
					<span className="title">Settings</span>
				</div>
				<div className="content settings">
					<form
						onSubmit={() => this.submit}
						form="userSettingsForm"
					>
						<Row>
							<Field
								name="username"
								type="text"
								component="input"
								placeholder={data.userProfile.username}
								className="input"
							/>
						</Row>
						<Row>
							<Field
								name="name"
								type="text"
								component="input"
								placeholder={data.userProfile.name || 'name'}
								className="input"
							/>
						</Row>
						<Row>
							<Field
								name="bio"
								type="text"
								component="input"
								placeholder={data.userProfile.bio || 'bio'}
								className="input"
							/>
						</Row>
						<Row>
							<Field
								name="email"
								type="email"
								component="input"
								placeholder={data.userProfile.email || 'email'}
								className="input"
							/>
						</Row>
						<Row>
							<Field
								name="facebook"
								placeholder={data.userProfile.facebook || 'facebook'}
								type="text"
								component="input"
								className="input"
							/>
						</Row>
						<Row>
							<Field
								name="twitter"
								placeholder={data.userProfile.twitter || 'twitter'}
								component="input"
								type="text"
								className="input"
							/>
						</Row>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

Settings.propTypes = {
	mutate: PropTypes.func.isRequired,
	data: PropTypes.shape({
		loading: PropTypes.bool,
		userProfile: PropTypes.shape({
			username: PropTypes.string,
			name: PropTypes.string,
			email: PropTypes.string,
			bio: PropTypes.string,
			twitter: PropTypes.string,
			linkedIn: PropTypes.string,
			facebook: PropTypes.string
		})
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

const updateUserInfo = gql`
mutation userUpdate($user: UserInputType!) {
	userUpdate(user: $user) {
		username
	}
}
`;

const UserSettingsForm = reduxForm({
	form: 'userSettingsForm',
})(Settings);

export default compose(
	graphql(userProfile),
	graphql(updateUserInfo)
)(UserSettingsForm);
