import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import _ from 'underscore';

import ResourceItem from '../ResourceItem';
import AdditionalResourceListContainer from '../../containers/AdditionalResourceListContainer';
import ResourceEventListContainer from '../../containers/ResourceEventListContainer';
import { getPostThumbnailBySize } from '../../../../lib/thumbnails';

import './ResourceList.css';

class ResourceList extends React.Component {

	render () {
		const { loading, resources, error } = this.props;

		if (loading) {
			return (<div>Loading</div>)
		}


		return (
			<div className="resourceList">
				<div>
					<Row className="resourceListContainer">
						<Col sm={12} md={12} lg={8}>
							<h2 className="resourceSectionTitle">Resources</h2>
							{resources.map((resource) =>
								<ResourceItem
									key={resource.id}
									resource={resource}
								/>
	            )}
						</Col>
						<Col sm={12} md={12} lg={4}>
							<h4 className="resourceSectionTitle">
								Upcoming Events
							</h4>
							<ResourceEventListContainer />
						</Col>
					</Row>
					{/*
	      <Row className="additionalResourcesContainer">
	        <Col>
	          <h4 className="resourceSectionTitle">
							Additional resources
						</h4>
						<AdditionalResourceListContainer />
	        </Col>
	      </Row>
        */}
				</div>
			</div>
		);
	}
}

ResourceList.defaultProps = {
	resources: [],
};

export default ResourceList;
