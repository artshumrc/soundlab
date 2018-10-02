import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import _ from 'underscore';

import ResourceItem from '../ResourceItem';
import AdditionalResourceListContainer from '../../containers/AdditionalResourceListContainer';
import ResourceEventListContainer from '../../containers/ResourceEventListContainer';
import { getPostThumbnailBySize } from '../../../../lib/thumbnails';

import styles from './ResourceList.scss';

class ResourceList extends React.Component {

  render () {
		const { loading, resources, error } = this.props;

    if (loading) {
      return (<div>Loading</div>)
    }


    return (
			<div className={styles.resourceList}>
	      <Grid>
	        <Row className={styles.resourceListContainer}>
	          <Col sm={8}>
	            <h2 className={styles.resourceSectionTitle}>Resources</h2>
	            {resources.map((resource) =>
	              <ResourceItem
									key={resource.id}
									resource={resource}
								/>
	            )}
	          </Col>
	          <Col sm={4}>
	            <h4 className={styles.resourceSectionTitle}>
								Upcoming Events
							</h4>
	            <ResourceEventListContainer />
	          </Col>
	      </Row>
	      <Row className={styles.additionalResourcesContainer}>
	        <Col>
	          <h4 className={styles.resourceSectionTitle}>
							Additional resources
						</h4>
						<AdditionalResourceListContainer />
	        </Col>
	      </Row>
	    </Grid>
		</div>
		);
  }
}

ResourceList.defaultProps = {
	resources: [],
};

export default ResourceList;
