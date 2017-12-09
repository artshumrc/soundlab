import React from 'react';
import { Link } from 'react-router';


const CountSection = ({ label, count, addLink })=> (
	<div className="countSection">
		<label>
			{label}
		</label>
		<span className="count">
			{count}
		</span>

		<Link
			className="addLink"
			to={addLink}
		>
			Add a new {label}
		</Link>
	</div>
);


export default CountSection;
