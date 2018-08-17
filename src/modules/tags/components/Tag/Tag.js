import React from 'react';
import { Link } from 'react-router';
import './Tag.css';

const Tags = props => (
	<Link
		to={{
			pathname: '/search',
			query: {
				tags: props.tag,
				page: 1,
			},
		}}
	>
		<span className="tag">
			{props.tag}
		</span>
	</Link>
);


export default Tags;
