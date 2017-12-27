import React from 'react';
import { Link } from 'react-router';
import autoBind from 'react-autobind';

import Button from '../../../../../../components/common/buttons/Button';
import Cover from '../../../../../../components/common/cover/Cover';
import Bricks from '../../../../../../components/common/cover/Bricks';
import Util from '../../../../../../lib/util';
import './ProjectCover.css';


class ProjectCover extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	makeBricks() {
		const { project } = this.props;

		if (!project.files || !project.files.length) {
			return null;
		}

		return project.files.map(file => {
			let imageURL = null;

			if (!imageURL) {
				return null;
			}

			return null;
		});
	}

	render() {
		const { project } = this.props;

		if (!project) {
			// TODO: loading
			return null;
		}

		return (
			<Cover
				className="home-cover home-cover--project"
				background={
					<Bricks >
						{/* this.makeBricks */}
					</Bricks>
				}
				overlay={
					<div className="home-overlay" />
				}
				left
				full
			>
				<div className="home-cover-content">
					<h1>{project.title}</h1>

					{project.subtitle ?
						<p className="lead">
							{project.subtitle}
						</p>
					: ''}

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
