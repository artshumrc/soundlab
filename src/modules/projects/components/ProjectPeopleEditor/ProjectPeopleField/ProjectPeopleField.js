import React from 'react';
import { Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import { Field } from 'redux-form';


import UserListItem from '../../../../users/components/UserListItem';

import './ProjectPeopleField.css';


class ProjectPeopleField extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			role: 'administrator',
		};
		autoBind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (
			!this.props.role
			&& nextProps.role
			&& nextProps.role.length
		) {
			this.setState({
				role: nextProps.role,
			});
		}
	}

	toggleFieldRole(e) {
		this.setState({
			role: e.target.options[e.target.selectedIndex].value,
		});
	}

	toggleFieldStatu(e) {
		this.setState({
			status: e.target.options[e.target.selectedIndex].value,
		});
	}

	render() {
		const { field } = this.props;

		return (
			<div className="projectPeopleField projectPeopleFieldInput">
				<Row key={field}>
					<Col md={5}>
						<UserListItem
							user={field.user}
						/>
					</Col>
					<Col md={3}>
						<Field
							name={`${field}.role`}
							component="select"
							onChange={this.toggleFieldRole}
						>
							<option value="administrator">Administrator</option>
							<option value="editor">Editor</option>
							<option value="contributor">Contributor</option>
						</Field>
					</Col>
					<Col md={3}>
						<Field
							name={`${field}.status`}
							component="select"
							onChange={this.toggleFieldStatus}
							disabled
						>
							<option value="public">Public</option>
							<option value="private">Private</option>
							<option value="pending">Pending</option>
						</Field>
					</Col>
					<Col md={1}>
						<button
							className="projectPeopleRemove"
							onClick={this.props.handleRemove}
						>
							<i className="mdi mdi-close" />
						</button>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ProjectPeopleField;
