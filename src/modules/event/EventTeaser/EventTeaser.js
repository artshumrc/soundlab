import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import { Grid, Row, Col } from 'react-bootstrap';
import { stripTags, truncate } from 'underscore.string';
import _ from 'underscore';

import { getPostThumbnailBySize } from '../../../lib/thumbnails';
import './EventTeaser.css';


class EventTeaser extends Component {

	render() {
		const {
			post_title, post_name, post_content, thumbnail, post_meta,

		} = this.props;

		const postLink = `/events/${post_name}`;

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
						className="itemTeaser"
					>
						<Link to={postLink}>
							<div
								className="image"
								style={thumbnailFeaturedImage}
							/>
						</Link>
						<div className="text">
							{startDate &&
								<div className="teaserDate">
									<Moment
										date={startDate.meta_value}
										format='DD MMMM YY'
									/>
								</div>
							}
							<Link to={postLink}>
								<h1 className="teaserTitleFeatured">
									{post_title}
								</h1>
								{/*
									TODO: add query for post categories and tags
								}<h4 className="teaserTags">
									Events, Tag 2, Tag 3
								</h4>
								*/}
							</Link>
							{/*	<h4 className="teaserTags">
								{categoriesAndTags.map((term, i) => (
									<span
										key={`${i}-${term.name}`}
									>
										{term.name}{i < categoriesAndTags.length - 1 ? ', ' : ''}
									</span>
								))}
							</h4> */}
							<p className="teaserText">
								{truncate(stripTags(this.props.post_content), 240)}
							</p>
							<Link to={postLink} className="readMoreFeaturedOuter">
								<span className="readMoreFeatured">
									For more information
								</span>
								<i className={`mdi mdi-arrow-right readMoreFeaturedIcon`} />
							</Link>
						</div>
					</div>
				:
					<div
						className="itemTeaser"
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
							className="text"
							md={9}
						>
							{startDate &&
								<div className="teaserDate">
									<Moment
										date={startDate.meta_value}
										format='DD MMMM YY'
									/>
								</div>
							}
							<Link to={postLink}>
								<h1 className="teaserTitle">
									{post_title}
								</h1>
							</Link>
							{/*
								<h4 className="teaserTags">
									Events, Tag 2, Tag 3
								</h4>

							<h4 className="teaserTags">
								{categoriesAndTags.map((term, i) => (
									<span
										key={`${i}-${term.name}`}
									>
										{term.name}{i < categoriesAndTags.length - 1 ? ', ' : ''}
									</span>
								))}
							</h4>	*/}
							<p className="teaserText">
								{truncate(stripTags(this.props.post_content), 240)}
							</p>
							<Link to={postLink}>
								<span className="readMore">
									For more information
								</span>
								<i className={`mdi mdi-arrow-right readMoreIcon`} />
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
