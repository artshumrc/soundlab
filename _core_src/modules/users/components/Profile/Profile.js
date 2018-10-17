import React from 'react';
import { Field, reduxForm } from 'redux-form';

import ProfileNav from '../ProfileNav';
import { required, maxLength } from '../../../../lib/formHelpers';

import './Profile.css';


const maxLength200 = maxLength(200);
const maxLength2100 = maxLength(2100);

class Profile extends React.Component {

	render() {
		return (
			<div className="profile">
				<ProfileNav />

				<form
					className="profileForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="profileEditorFormInputOuter">
						<label htmlFor="username">Username</label>
						<Field
							id="username"
							name="username"
							type="text"
							component="input"
							placeholder=""
							validate={[required, maxLength200]}
						/>
					</div>

					<div className="profileEditorFormInputOuter">
						<label htmlFor="name">Full Name</label>
						<Field
							id="name"
							name="name"
							type="text"
							component="input"
							placeholder=""
							validate={[required, maxLength200]}
						/>
					</div>

					<div className="profileEditorFormInputOuter">
						<label htmlFor="email">Email</label>
						<Field
							id="email"
							name="email"
							type="text"
							component="input"
							placeholder=""
							validate={[required, maxLength200]}
						/>
					</div>

					<div className="profileEditorFormInputOuter">
						<label htmlFor="bio">Biography</label>
						<Field
							id="bio"
							name="bio"
							type="text"
							component="textarea"
							placeholder=""
							validate={[maxLength2100]}
						/>
					</div>

					<button
						type="submit"
						className="profileEditorButton"
					>
						Save Profile
					</button>
				</form>
			</div>
		);
	}
}


export default reduxForm({
	form: 'Profile',
})(Profile);
