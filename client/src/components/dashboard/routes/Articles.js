import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import TextInput from '../components/TextInput';
import './Articles.css';

export default class Articles extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
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
							<TextInput placeholder="Placeholder" />
							<TextInput placeholder="Placeholder" value="value" />
							<TextInput placeholder="Error" valid={false} />
							<TextInput placeholder="Success" valid />
							<TextInput placeholder="Disabled" disabled />
						</Col>
						<Col lg={3}>
							<div className="sectionTitle">With icon</div>
							<TextInput placeholder="Placeholder" icon="calendar" />
							<TextInput placeholder="Placeholder" value="value" icon="user-o" />
							<TextInput placeholder="Error" valid={false} icon="calendar" />
							<TextInput placeholder="Success" valid icon="user-o" />
							<TextInput placeholder="Disabled" disabled icon="calendar" />
						</Col>
						<Col lg={3}>
							<div className="sectionTitle">With icon - right side</div>

							<TextInput placeholder="Placeholder" iconRight="calendar" />
							<TextInput placeholder="Placeholder" value="value" iconRight="user-o" />
							<TextInput placeholder="Error" valid={false} iconRight="calendar" />
							<TextInput placeholder="Success" valid iconRight="user-o" />
							<TextInput placeholder="Disabled" disabled iconRight="calendar" />

						</Col>
						<Col lg={3}>
							<div className="sectionTitle">Custom fields</div>
						</Col>
					</Row>
					<Row>
						<Col lg={3}>
							<div className="sectionTitle">Text inputs with labels</div>
							<TextInput placeholder="Placeholder" label="Label" />
							<TextInput placeholder="Placeholder" label="Label" required />
						</Col>
						<Col lg={3}>
              <div className="sectionTitle">Correct value label</div>
              <TextInput placeholder="Placeholder" value="Correct value" valid={true} label="Label" />
              <TextInput placeholder="Placeholder" value="Correct value" valid={true} label="Label" required />
            </Col>
						<Col lg={3}>
              <div className="sectionTitle">Wrong value label</div>
              <TextInput placeholder="Placeholder" value="Wrong value" valid={false} label="Label" />
              <TextInput placeholder="Placeholder" value="Wron value" valid={false} label="Label" required />
						</Col>
						<Col lg={3}>
							<div className="sectionTitle">Custom fields</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
