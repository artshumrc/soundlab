import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { Grid, Row, Col } from 'react-bootstrap';
import gql from 'graphql-tag'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router';

import SoundListItem from '../../../audio/components/SoundListItem';


import styles from './Profile.scss'


class Profile extends Component {

  render() {
    return (
      <div className={styles.profile}>
				<Grid>
					<Row>
						<Col>
							<h1 className={styles.title}>Your Tracks</h1>
							<div className={styles.submitOuter}>
								<Link
									to="/submit"
									className={styles.submitTrackButton}
								>
									Submit a track
								</Link>
							</div>
						</Col>
					</Row>
					<div className={styles.yourTracks}>
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
						<div className={styles.playlistSounds}>
							{this.props.sounds.map((sound, i) => (
								<SoundListItem
									key={`${sound.id}-${i}`}
									sound={sound}
									index={i}
								/>
							))}
						</div>
					</div>
				</Grid>
      </div>
    )
  }
}

Profile.defaultProps = {
	sounds: [],
};

export default Profile;
