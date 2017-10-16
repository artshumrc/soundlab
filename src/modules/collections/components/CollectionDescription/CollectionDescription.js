import React from 'react';

import Button from '../../../../components/common/buttons/Button';

import './CollectionDescription.css';

const CollectionDescription = props => (
	<div className="collectionDescription">
		<p>
			Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisuque
			adiungere vites conveniat quae curum boum qui cultus habendo sit pecori
			apibus quanta experientia parcis hinc canere incipiam
		</p>
		<Button
			href={'/articles/example-article'}
			light
			outline
		>
			Read more
		</Button>
	</div>
);


export default CollectionDescription;
