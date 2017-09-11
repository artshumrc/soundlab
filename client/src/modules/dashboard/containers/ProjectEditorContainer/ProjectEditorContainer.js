import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ProjectEditor from '../../components/projects/ProjectEditor';

class ProjectEditorContainer extends React.Component {
	handleSubmit(values) {
    this.props.mutate({
			variables: {
				project: values,
			},
		})
    .then((response) => {
      this.props.router.replace('/dashboard/projects');
    })
    .catch((err) => {
      console.error(err);
    });
	}

	render() {
		return (
		  <ProjectEditor
		    onSubmit={this.handleSubmit.bind(this)}
		  />
		);
	}

}

const addNewProject = gql`
	mutation projectCreate($project: ProjectInputType!) {
		projectCreate(project: $project) {
			title
		}
	}
`;


export default graphql(addNewProject)(ProjectEditorContainer);
