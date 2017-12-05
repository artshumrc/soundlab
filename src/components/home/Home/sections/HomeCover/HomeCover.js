import React from 'react';
import { Link } from 'react-router';

import Button from '../../../common/buttons/Button';
import Cover from '../../../common/cover/Cover';
import Bricks from '../../../common/cover/Bricks';
import Util from '../../../../lib/util';
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
					<h1>the archive, reimagined.</h1>
					<p className="lead">
						Create and share digital records and collections when, where, and how you want
					</p>
					<div className="home-cover-buttons">
						<Link
							to="/create"
						>
							<Button
								dark
							>
								Get Started
							</Button>
						</Link>
						<Link
							to="/#learn"
						>
							<Button
								transparentLight
								outline
							>
								Learn More
							</Button>
						</Link>
					</div>
				</div>
			</Cover>
		);
	}
}


export default HomeCover;
