// @flow

import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ModeCommentIcon from 'material-ui/svg-icons/editor/mode-comment';
import { connect } from 'react-redux';

import Home from '../../components/home/Home';

/*
import {
} from 'actions';
*/

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
