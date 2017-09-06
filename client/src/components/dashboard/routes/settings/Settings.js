import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import autoBind from 'react-autobind';

import './Settings.css';

import Form from '../../components/Form';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import TextInputIcon from '../../components/TextInputIcon';
import TagEditor from '../itemEditor/TagEditor';
import MetaEditor from '../itemEditor/MetaEditor';

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
		console.log('form submit values: ', values);
	}

	render() {
		return (
			<div>
				<div className="topBar">
					<span className="title">Settings</span>
				</div>
				<div className="content settings">
					<Form
						onSubmit={() => this.submit}
						form="userSettingsForm"
						initialValues={this.state}
					>
						<Row>
							<Field
								name="username"
								component={TextInput}
								type="text"
								placeholder="username"
								className="input"
							/>
						</Row>
						<Row>
							<Field 
								name="name"
								component={TextInput}
								type="text"
								placeholder="name"
								className="input"
							/>
						</Row>
						<Row>
							<Field
								name="bio"
								component={TextArea}
								type="text"
								placeholder="bio"
								className="input"
							/>
						</Row>
						<Row>
							<Field
								name="email"
								component={TextInput}
								type="email"
								placeholder="email"
								className="input" 
							/>
						</Row>
						<Row>
							<Field
								name="facebook"
								component={TextInput}
								placeholder="facebook"
								type="text"
								className="input"
								iconRight="rocket"
							/>
						</Row>
						<Row>
							<Field 
								name="google"
								component={TextInput}
								placeholder="google"
								type="text"
								className="input"
							/>
						</Row>
						<Row>
							<Field
								name="twitter"
								component={TextInput}
								placeholder="twitter"
								type="text"
								className="input"
							/>
						</Row>
					</Form>
				</div>
			</div>
		);
	}
}

Settings.propTypes = {
	mutate: PropTypes.func.isRequired
};

const updateUserInfo = gql`
mutation userUpdate($user: UserUpdateInputType!) {
	userUpdate(user: $user) {
		username
	}
}
`;

const UserSettingsForm = reduxForm({
	form: 'userSettingsForm',
})(Settings);

export default graphql(updateUserInfo)(UserSettingsForm);
