import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { Grid, Row, Col } from 'react-bootstrap';
import gql from 'graphql-tag'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router';

import UserSubmissionListItem from '../UserSubmissionListItem';


import './Profile.css'


class Profile extends Component {

	render() {
		return (
			<div className="profile">
				<Grid>
					<Row>
						<Col>
							<h1 className="title">Your Tracks</h1>
							<div className="submitOuter">
								<Link
									to="/submit"
									className="submitTrackButton"
								>
									Submit a track
								</Link>
							</div>
						</Col>
					</Row>
					<div className="yourTracks">
						<Row className="postsColumnSectionTitles">
							<Col sm={1}>
								<span className="sectionTitleNumber">#</span>
							</Col>
							<Col sm={8}>
								<span className="sectionTrackLabel">Track</span>
							</Col>
							<Col sm={3}>
								<span className="sectionTitleDuration"></span>
							</Col>
						</Row>
						<div className="playlistSounds">
							{this.props.sounds.map((sound, i) => (
								<UserSubmissionListItem
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
