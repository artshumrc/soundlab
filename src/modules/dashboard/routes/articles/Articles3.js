import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import SelectInput from '../components/SelectInput';
import TextInput from '../components/TextInput';

export default class Articles3 extends React.Component {
	constructor(props) {
		super(props);
		this.handleFormChange = this.handleFormChange.bind(this);
	}
	handleFormChange() {

	}
	render() {
	  const options = [{name: 'Option 1', val: 'option1'}, {name: 'Option 2', val: 'option2'}, {name: 'Option 3', val: 'option3'}];
		return (
			<div id="articles">
				<div className="topBar">
					<span className="title">Articles</span>
					<div className="pull-right buttonWrapper">
						<Button>Create Article +</Button>
					</div>
				</div>
				<div className="content">
					<span className="title">Selects</span>
					<Row>
						<Col lg={3}>
							<div className="sectionTitle">Text inputs</div>
							<SelectInput options={options} />
						</Col>
						<Col lg={3}>
							<div className="sectionTitle">Text inputs</div>
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" iconRight="calendar" />
						</Col>
						<Col lg={3} />
						<Col lg={3} />
					</Row>
				</div>
			</div>
		);
	}
}
