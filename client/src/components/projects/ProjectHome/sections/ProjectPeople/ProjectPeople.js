import React from 'react';
import './ProjectPeople.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import ProjectPerson from '../../../ProjectPerson';

export default class ProjectPeople extends React.Component {

	render() {
		const people = [{
			imageName: 'aden.png',
			name: 'Aden Brown',
			role: 'Museum Administrator',
		},{
			imageName: 'ashiful.png',
			name: 'Md. Ashiful Haque',
			role: 'Museum Administrator',
		},{
			imageName: 'elliott.png',
			name: 'Elliott Mitchell',
			role: 'Museum Administrator',
		},{
			imageName: 'igor.png',
			name: 'Igor Pasieczny',
			role: 'Museum Administrator',
		},{
			imageName: 'michal.png',
			name: 'Michał Pierzchlewicz',
			role: 'Museum Administrator',
		},{
			imageName: 'paul.png',
			name: 'Paul Pickering',
			role: 'Museum Administrator',
		},{
			imageName: 'robinson.png',
			name: 'Robinson Greig',
			role: 'Museum Administrator',
		},{
			imageName: 'tyler.png',
			name: 'Tyler Kirby',
			role: 'Museum Administrator',
		}];

		return (
			<section id="people">
				<h3>People</h3>
				<Grid>
					<Row>
						{people.map(person => (
							<Col lg={3}>
								<ProjectPerson {...person} />
							</Col>
						))}
					</Row>
				</Grid>
			</section>
		);
	}
}
