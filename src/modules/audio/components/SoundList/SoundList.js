import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

import SoundListItem from '../SoundListItem';
import FeaturedTrack from '../../../home/components/FeaturedTrack';

import './SoundList.css';

class SoundList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
		autoBind(this);
	}

/*	componentDidMount() {
		if (this.props.activeCategory !== 'everything') {
	    this.moveToTracklist();
		}
	}

	componentDidUpdate() {
		if (this.props.activeCategory !== 'everything') {
	    this.moveToTracklist();
		}
  }

	moveToTracklist() {
		const element = document.getElementById('tracklist');
    if (element) element.scrollIntoView();
	} */

	toggleSearchDropdown() {
		this.setState({
			open: !this.state.open,
		});
	}

	render () {
		const { loading, sounds, error, activeCategory } = this.props;
		const { open } = this.state;

		if (loading) {
			return (
				<div>
					{/* TODO: add loading component */}
				</div>
			);
		}

		const categories = [{
			title: 'Jazz',
			slug: 'jazz',
		}, {
			title: 'R&B',
			slug: 'rb',
		}, {
			title: 'Podcasts',
			slug: 'podcasts',
		}, {
			title: 'Classical',
			slug: 'classical',
		}, {
			title: 'Electronic',
			slug: 'electronic',
		}, {
			title: 'Acoustic',
			slug: 'acoustic',
		}];

		let activeCategoryTitle = 'Everything';
		categories.map(category => {
			if (activeCategory === category.slug) {
				activeCategoryTitle = category.title;
			}
		});

		return (
			<div className="soundList">
				<Row className="waveCoverSection">
					<Col >
						<FeaturedTrack
							track={sounds[0]}
							purple
							showFeaturedTrackLabel
						/>
					</Col>
				</Row>
				<div className="trackListSectionContainer">

					<Row >
						<Col >
							<div id="tracklist" className="searchTitle">
								<span className="letsListen">Let's listen to</span>
								<div
									onClick={this.toggleSearchDropdown.bind(this)}
									className="searchDropdownToggle"
								>
									<span className="filterTitle">{activeCategoryTitle}</span>
									{open ?
										<i className="mdi mdi-menu-up" />
									:
										<i className="mdi mdi-menu-down" />
									}
								</div>
							</div>
							{open ?
								<div className="filterContainer">
									<Link
										to={`/sounds`}
										className={`
											filterButton
											${activeCategory === 'everything' ? 'filterButtonActive' : ''}
										`}
									>
										<span>
											Everything
										</span>
									</Link>
									{categories.map(category => (
										<Link
											to={`/sounds/category/${category.slug}`}
											key={category.slug}
											className={`
												filterButton
												${activeCategory === category.slug ? 'filterButtonActive' : ''}
											`}
										>
											<span>
												{category.title}
											</span>
										</Link>
									))}
								</div>
							: ''}
						</Col>
					</Row>
					<Row className="postsColumnSectionTitles">
						<div className="sectionTitleNumberContainer">
							<span className="sectionTitleNumber">#</span>
						</div>
						<div className="sectionTrackLabelContainer">
							<span className="sectionTrackLabel">Track</span>
						</div>
						{/*
						<Col sm={3}>
							<span className="sectionTitleDuration"></span>
						</Col>
						*/}
					</Row>

					{sounds.map((sound, i) => (
						<SoundListItem
							key={`${sound.id}-${i}`}
							sound={sound}
							index={i}
						/>
					))}
				</div>
			</div>
		);
	}
}

SoundList.propTypes = {
	sounds: PropTypes.array,
	error: PropTypes.object,
	loading: PropTypes.bool,
};

SoundList.defaultProps = {
	sounds: [],
	activeCategory: 'everything',
};

export default SoundList;
