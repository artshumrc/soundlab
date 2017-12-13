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
		const { loading, resources, events, error } = this.props;

    if (loading) {
      return (<div>Loading</div>)
    }

		let event;
		let byline;
		let dateDescription;
		let excerpt;
		let thumbnailListImage;

		if (events && events.length) {
			event = events[0];
	    thumbnailListImage = {
	        width: '100%',
	        height: '800px',
	        objectFit: 'cover',
	        backgroundSize: 'cover',
	        backgroundPosition: 'center',
					backgroundImage: 'url("/images/default_event.jpg")',
	    };

			console.log('#######################');
			console.log('#######################');
			console.log(event);
			console.log('#######################');
			console.log('#######################');

			if (event.thumbnail) {
	      thumbnailListImage.backgroundImage = `url("${getPostThumbnailBySize(event.thumbnail, 'medium')}")`;
			}

			byline = _.findWhere(event.post_meta, { meta_key: 'byline' });
			dateDescription = _.findWhere(event.post_meta, { meta_key: 'date_description' });
			excerpt = _.findWhere(event.post_meta, { meta_key: 'excerpt' });
		}

    return (
			<div className={styles.resourceList}>
	      <Grid>
					{event &&
			      <Row>
			        <Col>
								<div className={styles.learnUpper}>
									<Link to={`/events/${event.post_name}`}>
					          <div
											className={styles.learnBackground}
											style={thumbnailListImage}
										/>
									</Link>
				          <div className={styles.learnInlay}>
										<Link to={`/events/${event.post_name}`}>
					            <h3 className={styles.learnTitle}>
												{event.post_title}
											</h3>
										</Link>
										{dateDescription &&
					            <span className={styles.learnDate}>
												{dateDescription.meta_value}
											</span>
										}
										{excerpt &&
					            <p className={styles.learnDescription}>
												{excerpt.meta_value}
											</p>
										}
										<Link to={`/events/${event.post_name}`}>
											<div className={styles.learnMore}>
												<i className="mdi mdi-chevron-right" />
												<span>
													Learn more
												</span>
											</div>
										</Link>
				          </div>
								</div>
			        </Col>
			      </Row>
					}
	        <Row className={styles.resourceListContainer}>
	          <Col sm={8}>
	            <h2 className={styles.resourceSectionTitle}>Workshops</h2>
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
