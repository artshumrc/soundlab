// @flow

import React from 'react';
import { connect } from 'react-redux';
import Home from '../../components/home/Home';
import Header from '../../navigation/Header';

class ProjectOverviewContainer extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<div>
					<h4>Collection</h4>
					<h2>Project Collection List View Page</h2>
				</div>
				<CollectionListView />
				<Footer />
			</div>
		);
	}

}

export default ProjectOverviewContainer;
