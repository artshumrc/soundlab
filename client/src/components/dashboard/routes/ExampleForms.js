import React from 'react';
import {connect} from 'react-redux';
import TextInput from '../components/TextInput';
import Form from '../components/Form';
import {changeValue} from '../../../actions/exampleForm';

const mapStateToProps = state => ({user: state.exampleForm});

class ExampleForms extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.dispatch(changeValue(event.target.name, event.target.value));
	}

	render() {
		return (
			<div className="content">
				<Form store={this.props.user}>
					<TextInput placeholder="Placeholder" name="username" onChange={this.handleChange} />
					<TextInput placeholder="Placeholder" name="email" onChange={this.handleChange} />
				</Form>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ExampleForms);
