import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

import SoundListItem from '../SoundListItem';
import FeaturedTrack from '../../../home/components/FeaturedTrack';

import styles from './SoundList.scss';

class SoundList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
		autoBind(this);
	}

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
			<Grid className={styles.soundList}>
				<Row className={styles.waveCoverSection}>
					<Col >
						<FeaturedTrack
							track={sounds[0]}
							purple
						/>
					</Col>
				</Row>
				<Row>
					<Col >
						<div className={styles.searchTitle}>
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
									to={`/waves`}
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
										to={`/waves/category/${category.slug}`}
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

				{sounds.map((sound, i) => (
					<SoundListItem
						key={`${sound.id}-${i}`}
						sound={sound}
						index={i}
					/>
				))}
			</Grid>
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
