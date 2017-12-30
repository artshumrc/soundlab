import React from 'react';
import { Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import { Field } from 'redux-form';


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

	toggleFieldType(e) {
		this.setState({
			role: e.target.options[e.target.selectedIndex].value,
		});
	}

	render() {
		const { field } = this.props;

		return (
			<div className="itemEditorProjectPeopleField">
				<Row key={field}>
					<Col md={2}>
						<Field
							name={`${field}.role`}
							component="select"
							onChange={this.toggleFieldType}
						>
							<option value="administrator">Administrator</option>
							<option value="editor">Editor</option>
							<option value="contributor">Contributor</option>
						</Field>
					</Col>
					<Col md={2}>
					</Col>
					<Col md={7}>
					</Col>
					<Col md={1}>
						<button
							className="itemEditorRemoveProjectPeople"
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
