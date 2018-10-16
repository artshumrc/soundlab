import React from 'react';

import Button from '../../../../../../components/common/buttons/Button';
import Cover from '../../../../../../components/common/cover/Cover';
import Bricks from '../../../../../../components/common/cover/Bricks';
import './HomeCover.css';


class HomeCover extends React.Component {

	render() {

		return (
			<Cover
				className="home-cover"
				background={
					<Bricks />
				}
				overlay={
					<div className="home-overlay" />
				}
				reactsToMouse
				left
				full
			>
				<div className="home-cover-content">
					<h1>The archive, reimagined.</h1>
					<h5>Create and share digital records and collections when, where, and how you want.</h5>
					<div className="home-cover-buttons">
						<Button
							dark
							to="/create"
						>
							Start your archive
						</Button>
					</div>
				</div>
			</Cover>
		);
	}
}


export default HomeCover;
