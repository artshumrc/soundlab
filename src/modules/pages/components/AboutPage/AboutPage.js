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
				<p>
					Orpheus reimagines the purpose of an archive in a digital medium, where all (or at least many) things may be remembered. It is a tool for creating and managing digital collections and sharing them with our community.
				</p>
				<p>
					Orpheus is currently under active development and in alpha release.
				</p>
			</section>
		</div>
	);
}

export default AboutPage;
