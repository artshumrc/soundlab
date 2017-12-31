import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { required, maxLength } from '../../../../lib/formHelpers';

import './UserInvite.css';


const maxLength200 = maxLength(200);


const UserInvite = props => (
	<div className="userInvite">
		<Field
			name="userEmail"
			type="email"
			component="input"
			placeholder="User email (e.g. user@example.edu)"
			validate={[required, maxLength200]}
		/>

		<button
			type="submit"
		>
			Invite
		</button>
	</div>
);


UserInvite.propTypes = {
	handleSubmit: PropTypes.function,
};

export default reduxForm({
	form: 'UserInvite',
})(UserInvite);
