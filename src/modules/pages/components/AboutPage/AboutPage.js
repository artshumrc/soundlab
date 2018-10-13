import React from 'react';

import CollectionCover from '../../../collections/components/CollectionCover';


import './AboutPage.css';


const AboutPage = props => {

	return (
		<div >
			<CollectionCover
				title="About Orpheus"
				coverBricks
			/>
			<section className="pageContent">
			</section>
		</div>
	);
}

export default AboutPage;
