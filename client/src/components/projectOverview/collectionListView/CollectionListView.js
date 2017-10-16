import React from 'react';
import { connect } from 'react-redux';

export class CollectionListView extends React.Component {

	render() {
		return (
			<div>
				<h1>COLLECTION LIST GOES HERE</h1>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps, {
	}
)(CollectionListView);
