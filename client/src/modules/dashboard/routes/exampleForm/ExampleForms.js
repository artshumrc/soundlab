import React from 'react';
import {connect} from 'react-redux';
import {Field} from 'redux-form';
import validator from 'validator';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';

const mapStateToProps = state => ({
	initialValues: {
		email: 'bruce@wayneenterprises.gth',
		firstName: 'Bruce',
		lastName: 'Wayne'
	}
});

const validate = (values) => {
	const errors = {};
	if (!values.firstName) {
		errors.firstName = 'Required';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!validator.isEmail(values.email)) {
		errors.email = 'Invalid email address';
	}
	if (!values.sex) {
		errors.sex = 'Required';
	}

	return errors;
};

class ExampleForms extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		console.log('event LOG', event);
	}

	inputComponent(props) {
		return <TextInput {...props} />;
	}

	selectComponent(props) {
		return <SelectInput {...props} />;
	}


	render() {
		return (
			<div className="content">
				<div className="container">
					<form
						onSubmit={this.handleSubmit}
						validate={validate}
						form="exampleForm"
					>
						<div>
							<label htmlFor="email">E-mail</label>
							<Field name="email" component={this.inputComponent} type="email" placeholder="e-mail" />
						</div>
						<div>
							<label htmlFor="firstName">First Name</label>
							<Field name="firstName" component={this.inputComponent} type="text" placeholder="first name" />
						</div>
						<div>
							<label htmlFor="lastName">Last Name</label>
							<Field name="lastName" component={this.inputComponent} type="text" placeholder="last name" />
						</div>
						<div>
							<label htmlFor="sex">Sex</label>
							<Field name="sex" component={this.selectComponent} type="text">
								<option value="male">Male</option>
								<option value="female">Female</option>
							</Field>
						</div>
					</form>
				</div>
			</div>
		);
	}
}


export default connect(mapStateToProps)(ExampleForms);
