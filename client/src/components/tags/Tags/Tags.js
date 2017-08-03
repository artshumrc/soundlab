import React from 'react';
import Tag from '../Tag';
import './Tags.css';

const Tags = props => (
	<div className="tags">
		{props.tags.map(tag => (
			<Tag
				key={tag}
				tag={tag}
			/>
		))}
	</div>
);


export default Tags;
