import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

import PlaylistListItem from '../PlaylistListItem';
import FeaturedTrack from '../../../home/components/FeaturedTrack';

import styles from './PlaylistList.scss';

class PlaylistList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
		autoBind(this);
	}

	componentDidMount() {
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
	}

	toggleSearchDropdown() {
		this.setState({
			open: !this.state.open,
		});
	}

	render () {
		const { loading, playlists, error, activeCategory } = this.props;
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
			<Grid className={styles.playlistList}>
				<Row className={styles.waveCoverSection}>
					<Col >
						<FeaturedTrack
							track={playlists[0]}
							purple
							showFeaturedTrackLabel
						/>
					</Col>
				</Row>
				<Row>
					<Col >
						<div id="tracklist" className={styles.searchTitle}>
							<span className={styles.letsListen}>Let's listen to</span>
							<div
								onClick={this.toggleSearchDropdown.bind(this)}
								className={styles.searchDropdownToggle}
							>
								<span className={styles.filterTitle}>{activeCategoryTitle}</span>
								{open ?
									<i className="mdi mdi-menu-up" />
								:
									<i className="mdi mdi-menu-down" />
								}
							</div>
						</div>
						{open ?
							<div className={styles.filterContainer}>
								<Link
									to={`/playlists`}
									className={`
										${styles.filterButton}
										${activeCategory === 'everything' ? styles.filterButtonActive : ''}
									`}
								>
									<span>
										Everything
									</span>
								</Link>
								{categories.map(category => (
									<Link
										to={`/playlists/category/${category.slug}`}
										key={category.slug}
										className={`
											${styles.filterButton}
											${activeCategory === category.slug ? styles.filterButtonActive : ''}
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
	      <Row className={styles.postsColumnSectionTitles}>
          <Col sm={1}>
						<span className={styles.sectionTitleNumber}>#</span>
					</Col>
          <Col sm={8}>
						<span className={styles.sectionTrackLabel}>Track</span>
					</Col>
					<Col sm={3}>
						<span className={styles.sectionTitleDuration}></span>
					</Col>
				</Row>

				{playlists.map((playlist, i) => (
					<PlaylistListItem
						key={`${playlist.id}-${i}`}
						playlist={playlist}
						index={i}
					/>
				))}
			</Grid>
		);
	}
}

PlaylistList.propTypes = {
	playlists: PropTypes.array,
	error: PropTypes.object,
	loading: PropTypes.bool,
};

PlaylistList.defaultProps = {
	playlists: [],
	activeCategory: 'everything',
};

export default PlaylistList;
