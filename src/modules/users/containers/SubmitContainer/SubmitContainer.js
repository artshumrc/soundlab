import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import Submit from '../../components/Submit';
import { postCreateMutation } from '../../graphql/mutations/posts';


class SubmitContainer extends React.Component {

	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			submitted: false,
		};
	}

	dismissSubmitted() {
		this.setState({
			submitted: false,
		});
	}

	async onSubmit(values) {
		const newPost = {
			content: `
				Link: ${values.link},
				Title: ${values.title},
				Description: ${values.description},
				Location: ${values.location},
			`,
		};

		// create post
		await this.props.postCreate(newPost);

		// set form state submitted
		this.setState({
			submitted: true,
		});

		// scroll to top
	  window.scrollTo(0, 0);
	}

	render() {
		return (
			<Submit
				onSubmit={this.onSubmit.bind(this)}
				dismissSubmitted={this.dismissSubmitted}
				submitted={this.state.submitted}
			/>
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.username,
	token: state.auth.token,
});

export default compose(
	postCreateMutation,
	connect(mapStateToProps),
)(SubmitContainer);
