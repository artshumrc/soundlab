import React from 'react';
import { Link } from 'react-router';

import Button from '../../../../../../components/common/buttons/Button';
import Cover from '../../../../../../components/common/cover/Cover';
import Bricks from '../../../../../../components/common/cover/Bricks';
import Util from '../../../../../../lib/util';
import './ProjectCover.css';


class ProjectCover extends React.Component {

	render() {

		return (
			<Cover
				className="home-cover home-cover--project"
				background={
					<Bricks />
				}
				overlay={
					<div className="home-overlay" />
				}
				left
				full
			>
				<div className="home-cover-content">
					<h1>Example Project Museum or Archive</h1>

					<p className="lead">
						Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites
					</p>

					<div className="home-cover-buttons">
						<Button
							dark
							to="/collections"
						>
							Explore
						</Button>
						<Button
							transparentLight
							outline
							to="/#learn"
						>
							About
						</Button>
					</div>
				</div>
			</Cover>
		);
	}
}


export default ProjectCover;
