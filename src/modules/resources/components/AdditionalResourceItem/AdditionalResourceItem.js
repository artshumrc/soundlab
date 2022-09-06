import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

import './AdditionalResourceItem.css'


class AdditionalResourceItem extends Component{

	render() {
		const { resource } = this.props;

		return(

			<div className="additionalResourceItem">
				<Link
					to={`/resources/${resource.post_name}`}
					className="link"
				>
					<i className="mdi mdi-chevron-right" />
					<span className="readMore">
						{resource.post_title}
					</span>
				</Link>
			</div>
		)
	}
}

AdditionalResourceItem.propTypes = {
	index: PropTypes.number,
	styles: PropTypes.object,
	post: PropTypes.object,
}

export default AdditionalResourceItem
