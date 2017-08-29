import React from 'react';
import Button from '../../../common/buttons/Button';
import Cover from '../../../common/cover/Cover';
import Bricks from '../../../common/cover/Bricks';
import Util from '../../../../lib/util';


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
				full
			>
				<div className="home-cover-content">
					<h1>the archive, reimagined</h1>
					<p className="lead">Create and share digital collections across platforms when, where, and how you want</p>
					<div>
						<Button
							href="#learn"
							onClick={Util.scrollToElement}
							transparentLight
						>
							Learn More
						</Button>
						<Button
							href="#getStarted"
							onClick={Util.scrollToElement}
							primary
						>
							Get Started
						</Button>
					</div>
				</div>
			</Cover>
		);
	}
}


export default HomeCover;
