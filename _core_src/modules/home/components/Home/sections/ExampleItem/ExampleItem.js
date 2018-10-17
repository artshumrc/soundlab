import React from 'react';
import PropTypes from 'prop-types';

// import Tags from '../../../tags/components/Tags';
import './ExampleItem.css';

const ExampleItem = (props) => {
	return (
		<div className="exampleListItem">
			<div className="exampleListItemImage">
				<img alt={props.title} src={props.imageUrl} />
			</div>
			<div
				className={`
					exampleListItemBackground
					exampleListItemBackgroundWithImage
				`}
			>
				<h5>{props.title}</h5>
				<p>
					{props.description}
				</p>
			</div>
		</div>
	);
};

ExampleItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	imageUrl: PropTypes.string,
};

ExampleItem.defaultProps = {
	title: '',
	description: '',
	imageUrl: null,
};

export default ExampleItem;
