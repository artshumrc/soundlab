import React from 'react';
import {Image} from 'react-bootstrap';
import './PopularCollectionsSection.css';
import FeaturedCollections from './FeaturedCollections';

export default class PopularCollectionsSection extends React.Component {
	render() {
		const collectionData = [
			{
				name: 'Neolithic era art found in Egypt',
				country: 'Egypt',
				location: 'Easter play of Muri',
				category: 'Photography and much more',
				imageUrl: '/images/sampleCollection.png',
			},
			{
				name: 'World War One–Era Bottles Unearthed in Israel',
				country: 'Israel',
				location: 'Easter play of Muri',
				category: 'Photography',
				imageUrl: '/images/sampleCollection.png',
			},
			{
				name: 'Neolithic era art found in Egypt',
				country: 'Egypt',
				location: 'Easter play of Muri',
				category: 'Photography',
				imageUrl: '/images/sampleCollection.png',
			}
		];
		return (
			<section id="collections">
				<div className="parallax">
					<div className="parallax-content">
						<Image src="/images/collections.png" responsive />
						<h3>Popular collections</h3>
						<h2 className="invert">We have largest digital archive</h2>
						<FeaturedCollections data={collectionData} />
					</div>
				</div>
			</section>
		);
	}
}
