import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import _s from 'underscore.string';

import './ResourceItem.css';


class ResourceItem extends Component {

	render() {
		const { resource } = this.props;

		return(
			<div className="resourceItem">
				<Link to={`/resources/${resource.post_name}`}>
					<h3 className="title">
						{resource.post_title}
					</h3>
				</Link>
				<p className="content">
					{_s.prune(resource.post_content, 120)}
				</p>
				<Link
					to={`/resources/${resource.post_name}`}
					className="readMoreLink"
				>
					<i className="mdi mdi-chevron-right" />
					<span className="readMoreLinkText">Read more</span>
				</Link>
			</div>
		)
	}
}

ResourceItem.propTypes = {
	index: PropTypes.number,
	styles: PropTypes.object,
	post: PropTypes.object,
}

export default ResourceItem
