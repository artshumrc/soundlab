import React from 'react';
import { Link } from 'react-router';
import Tags from '../../tags/Tags';
import './ItemListItem.css';

const ItemListItem = props => {
	const itemUrl = `/items/${props.slug}`;

	return (
		<div className="itemListItem">
			<Link to={itemUrl}>
				<img src={props.imageUrl} alt={props.title} />
			</Link>
			<Tags tags={props.tags} />
			<Link to={itemUrl}>
				<h3>{props.title}</h3>
			</Link>
			<p className="description">
				Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque
				adiungere vites conveniat
			</p>
		</div>
	);
}

export default ItemListItem;
