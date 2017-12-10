import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import * as authActions from '../../../auth/actions';
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

	componentDidMount() {
		const { userId, toggleAuthModal } = this.props;
		if (!userId) {
			toggleAuthModal(true);
		}
	}

	verifyCaptcha(response) {
		this.setState({
			recaptcha: response,
		});
	}

	async onSubmit(values) {
		const newProject = {
			title: values.title,
			hostname: values.hostname,
		}

		// create post
		if (this.state.recaptcha) {
			const created = await this.props.projectCreate(newProject);

			window.location = `//${newProject.hostname}.orphe.us/dashboard`;
		} else {
			console.error('Recaptcha failed');
		}
	}

	onChange(values) {
		this.setState({
			projectHostname: values.hostname || '',
		});
	}

	render() {
		return (
			<ProjectCreate
				projectHostname={this.state.projectHostname}
				onSubmit={this.onSubmit}
				onChange={this.onChange}
				verifyCaptcha={this.verifyCaptcha}
				captchaVerified={this.state.recaptcha}
				currentUserId={this.props.userId}
			/>
		)
	}
}

const mapStateToProps = state => ({
	userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
	toggleAuthModal: toggled => {
		dispatch(authActions.toggleAuthModal(toggled));
	},
});

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
	projectCreateMutation,
)(ProjectCreateContainer);
