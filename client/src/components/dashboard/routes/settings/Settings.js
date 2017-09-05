import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import Form from '../../components/Form';
import TagEditor from '../itemEditor/TagEditor';
import MetaEditor from '../itemEditor/MetaEditor';

const Settings = ({ submit }) => (
	<div>
		<div className="topBar">
			<span className="title">Create New Projects</span>
		</div>
		<div className="content">
			<Form
				onSubmit={() => submit}
				form="settingsForm"
				initialValues={this.state}
			>
				<Field
					name="username"
					component="input"
					type="text"
					placeholder="username"
					className="input"
				/>
				<Field 
					name="name"
					component="input"
					type="text"
					placeholder="name"
					className="input"
				/>
				<Field
					name="bio"
					component="input"
					type="text"
					placeholder="bio"
					className="input"
				/>
				<Field
					name="email"
					component="input"
					type="text"
					placeholder="email"
					className="input" 
				/>
				<Field
					name="facebook"
					component="input"
					placeholder="facebook"
					type="text"
					className="input" 
				/>
				<Field 
					name="google"
					component="input"
					placeholder="google"
					type="text"
					className="input"
				/>
				<Field
					name="twitter"
					component="input"
					placeholder="twitter"
					type="text"
					className="input"
				/>
			</Form>
		</div>
	</div>
);

Settings.propTypes = {
	submit: PropTypes.func.isRequired
};

export default Settings;
