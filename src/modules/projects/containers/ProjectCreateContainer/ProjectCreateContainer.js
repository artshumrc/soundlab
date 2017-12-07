import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ProjectCreate from '../../components/ProjectCreate';
import projectDetailQuery from '../../graphql/queries/detail';
import projectCreateMutation from '../../graphql/mutations/create';



class ProjectCreateContainer extends React.Component {

	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			projectSlug: '',
			submitted: false,
			recaptcha: null,
			available: false,
		};
	}

	verifyCaptcha(response) {
		this.setState({
			recaptcha: response,
		});
	}

	async onSubmit(values) {
		const newProject = {
			slug: values.slug,
		}

		// create post
		if (this.state.recaptcha) {
			await this.props.postCreate(newProject);

			// scroll to top
		  window.scrollTo(0, 0);
		} else {
			console.error('Recaptcha failed');
		}
	}

	onChange(values) {
		this.setState({
			projectSlug: values.slug,
		});
	}

	render() {
		return (
			<ProjectCreate
				projectSlug={this.state.projectSlug}
				onSubmit={this.onSubmit}
				onChange={this.onChange}
				verifyCaptcha={this.verifyCaptcha}
			/>
		)
	}
}

export default compose(
	projectCreateMutation,
)(ProjectCreateContainer);
