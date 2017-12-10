import React from 'react';
import { Link } from 'react-router';

import './CountSection.css';

const CountSection = ({ label, labelPlural, count, addLink, addLinkText })=> (
	<div className="countSection">
		<span className="count">
			{count}
		</span>

		<label>
			{labelPlural}
		</label>

		<Link
			className="addLink"
			to={addLink}
		>
			<i className="mdi mdi-plus" />
			{addLinkText}
		</Link>
	</div>
);


export default CountSection;
