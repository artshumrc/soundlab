import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';

import './Articles.css';

export default class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.handleFormChange = this.handleFormChange.bind(this);
	}

	handleFormChange() {

	}

	render() {
		return (
			<div id="articles">
			</div>
		);
	}
}
