import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import Submit from '../../components/Submit';
import { postCreateMutation } from '../../graphql/mutations/posts';


class SubmitContainer extends React.Component {

	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			submitted: false,
			recpatcha: null,
		};
	}

	verifyCaptcha(response) {
		this.setState({
			recaptcha: response,
		});
	}

	dismissSubmitted() {
		this.setState({
			submitted: false,
		});
	}

	async onSubmit(values) {
		const newPost = {
			link: values.link,
			title: values.title,
			description: values.description,
			location: values.location,
		}

		// create post
		if (this.state.recaptcha) {
			await this.props.postCreate(newPost);

			// set form state submitted
			this.setState({
				submitted: true,
			});

			// scroll to top
		  window.scrollTo(0, 0);
		} else {
			console.error('Recaptcha failed');
		}
	}

	render() {
		return (
			<Submit
				onSubmit={this.onSubmit}
				dismissSubmitted={this.dismissSubmitted}
				verifyCaptcha={this.verifyCaptcha}
				submitted={this.state.submitted}
			/>
		);
	}
}

export default compose(
	postCreateMutation,
)(SubmitContainer);
