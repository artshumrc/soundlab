import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import { stripTags, truncate } from 'underscore.string';
import _ from 'underscore';

import { getPostThumbnailBySize } from '../../../lib/thumbnails';
import styles from './EventTeaser.scss';


class EventTeaser extends Component {

	render() {
		const {
			post_title, post_name, post_content, thumbnail, post_meta,

		} = this.props;

		const postLink = `/item/${post_name}`;

		let thumbnailFeaturedImage;
		let thumbnailTeaserImage;


		if (thumbnail) {
			thumbnailFeaturedImage = {
	      backgroundImage: `url("${getPostThumbnailBySize(thumbnail, 'large')}")`,
				width: '100%',
				height: '430px',
				objectFit: 'cover',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			};

			thumbnailTeaserImage = {
	      backgroundImage: `url("${getPostThumbnailBySize(thumbnail, 'medium')}")`,
				width: '100%',
				height: '220px',
				objectFit: 'cover',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			};
		}

		const startDate = _.findWhere(post_meta, { meta_key: 'start_date' });

		return (
			<Row>
				{this.props.isFeatured === true ?
					<div
						className={styles.itemTeaser}
					>
						<Link to={postLink}>
							<div
								className="image"
								style={thumbnailFeaturedImage}
							/>
						</Link>
						<div className={styles.text}>
							{startDate &&
								<div className={styles.teaserDate}>
									<Moment
										date={startDate.meta_value}
										format='DD MMMM YY'
									/>
								</div>
							}
							<Link to={postLink}>
								<h1 className={styles.teaserTitleFeatured}>
									{post_title}
								</h1>
								{/*
									TODO: add query for post categories and tags
								}<h4 className={styles.teaserTags}>
									Events, Tag 2, Tag 3
								</h4>
								*/}
							</Link>
						{/*	<h4 className={styles.teaserTags}>
								{categoriesAndTags.map((term, i) => (
									<span
										key={`${i}-${term.name}`}
									>
										{term.name}{i < categoriesAndTags.length - 1 ? ', ' : ''}
									</span>
								))}
							</h4> */}
							<p className={styles.teaserText}>
								{truncate(stripTags(this.props.post_content), 240)}
							</p>
							<Link to={postLink} className={styles.readMoreFeaturedOuter}>
								<span className={styles.readMoreFeatured}>
									For more information
								</span>
								<i className={`mdi mdi-arrow-right ${styles.readMoreFeaturedIcon}`} />
							</Link>
						</div>
					</div>
				:
					<div
						className={styles.itemTeaser}
					>
						<Col md={3}>
							<Link to={postLink}>
								<div
									className="image"
									style={thumbnailTeaserImage}
								/>
							</Link>
						</Col>
						<Col
							className={styles.text}
							md={9}
						>
							{startDate &&
								<div className={styles.teaserDate}>
									<Moment
										date={startDate.meta_value}
										format='DD MMMM YY'
									/>
								</div>
							}
							<Link to={postLink}>
								<h1 className={styles.teaserTitle}>
									{post_title}
								</h1>
							</Link>
							{/*
								<h4 className={styles.teaserTags}>
									Events, Tag 2, Tag 3
								</h4>

							<h4 className={styles.teaserTags}>
								{categoriesAndTags.map((term, i) => (
									<span
										key={`${i}-${term.name}`}
									>
										{term.name}{i < categoriesAndTags.length - 1 ? ', ' : ''}
									</span>
								))}
							</h4>	*/}
							<p className={styles.teaserText}>
								{truncate(stripTags(this.props.post_content), 240)}
							</p>
							<Link to={postLink}>
								<span className={styles.readMore}>
									For more information
								</span>
								<i className={`mdi mdi-arrow-right ${styles.readMoreIcon}`} />
							</Link>
						</Col>
					</div>
				}
			</Row>
		);
	}
}

EventTeaser.propTypes = {
	index: PropTypes.number,
	isFeatured: PropTypes.bool,
};

export default EventTeaser;
