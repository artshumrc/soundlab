import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import TextInput from '../components/TextInput';
import TextInputIcon from '../components/TextInputIcon';
import TextArea from '../components/TextArea';
import NumberInput from '../components/NumberInput';
import InputAction from '../components/InputAction';
import './Articles.css';

export default class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.handleFormChange = this.handleFormChange.bind(this);
	}

	handleFormChange() {

	}

	render() {
	  const actionOptions = [{name: 'USD'}, {name: 'PLN'}];
		return (
			<div id="articles">
				<div className="topBar">
					<span className="title">Articles</span>
					<div className="pull-right buttonWrapper">
						<Button>Create Article +</Button>
					</div>
				</div>
				<div className="content">
					<span className="title">Form Elements</span>
					<Row>
						<Col lg={3}>
							<div className="sectionTitle">Text inputs</div>
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" />
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" value="value" />
							<TextInput changeCb={this.handleFormChange} placeholder="Error" valid={false} />
							<TextInput changeCb={this.handleFormChange} placeholder="Success" valid />
							<TextInput changeCb={this.handleFormChange} placeholder="Disabled" disabled />
						</Col>
						<Col lg={3}>
							<div className="sectionTitle">With icon</div>
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" icon="calendar" />
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" value="value" icon="user-o" />
							<TextInput changeCb={this.handleFormChange} placeholder="Error" valid={false} icon="calendar" />
							<TextInput changeCb={this.handleFormChange} placeholder="Success" valid icon="user-o" />
							<TextInput changeCb={this.handleFormChange} placeholder="Disabled" disabled icon="calendar" />
						</Col>
						<Col lg={3}>
							<div className="sectionTitle">With icon - right side</div>

							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" iconRight="calendar" />
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" value="value" iconRight="user-o" />
							<TextInput changeCb={this.handleFormChange} placeholder="Error" valid={false} iconRight="calendar" />
							<TextInput changeCb={this.handleFormChange} placeholder="Success" valid iconRight="user-o" />
							<TextInput changeCb={this.handleFormChange} placeholder="Disabled" disabled iconRight="calendar" />

						</Col>
						<Col lg={3}>
							<div className="sectionTitle">Custom fields</div>

							<TextInputIcon changeCb={this.handleFormChange} icon="user-o" value="User" placeholder="Username" />
							<TextInput changeCb={this.handleFormChange} placeholder="Disabled" disabled iconRight="calendar" />
							<InputAction options={actionOptions} />
							<NumberInput changeCb={this.handleFormChange} />

						</Col>
					</Row>
					<Row>
						<Col lg={3}>
							<div className="sectionTitle">Text inputs with labels</div>
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" label="Label" />
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" label="Label" required />
							<TextArea changeCb={this.handleFormChange} rows={7} value="The textarea tag defines a multi-line text input control." label="Label" disabled />
						</Col>
						<Col lg={3}>
							<div className="sectionTitle">Correct value label</div>
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" value="Correct value" valid label="Label" />
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" value="Correct value" valid label="Label" required />
							<TextArea changeCb={this.handleFormChange} rows={7} value="The textarea tag defines a multi-line text input control." label="Label" min={40} />
						</Col>
						<Col lg={3}>
							<div className="sectionTitle">Wrong value label</div>
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" value="Wrong value" valid={false} label="Label" />
							<TextInput changeCb={this.handleFormChange} placeholder="Placeholder" value="Wron value" valid={false} label="Label" required />
							<TextArea changeCb={this.handleFormChange} rows={7} value="The textarea tag defines a multi-line text input control." label="Label" required />
						</Col>
						<Col lg={3}>
							<div className="sectionTitle">Textarea</div>
							<TextArea changeCb={this.handleFormChange} placeholder="Placeholder" rows={7} />
							<TextArea changeCb={this.handleFormChange} value="The textarea tag defines a multi-line text input control." label="Label" rows={7} required />
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
