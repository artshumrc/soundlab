import React from 'react';
import Button from '../../../../common/buttons/Button';
import Cover from '../../../../common/cover/Cover';
import Bricks from '../../../../common/cover/Bricks';
import Util from '../../../../../lib/util';
import './ProjectCover.css';


class ProjectCover extends React.Component {

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
				full
			>
				<div className="home-cover-content">
					<h1>Example Project Museum or Archive</h1>
					<p className="lead">Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites</p>
					<div>
						<Button
							href="#learn"
							onClick={Util.scrollToElement}
							transparentLight
						>
							About
						</Button>
						<Button
							href="#getStarted"
							onClick={Util.scrollToElement}
							primary
						>
							Explore
						</Button>
					</div>
				</div>
			</Cover>
		);
	}
}


export default ProjectCover;
