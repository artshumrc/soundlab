// @flow

import React from 'react';
import { connect } from 'react-redux';
import Home from '../../components/home/Home';
import './App.css';

export class App extends React.Component {
	handleClick: Function;

	render() {
		return (
			<div >
				<Home />
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps, {
	}
)(App);
