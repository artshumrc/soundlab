import React from 'react';
import _ from 'underscore';
import faker from 'faker';

import ProjectPerson from '../../../ProjectPerson';

import './ProjectPeople.css';

export default class ProjectPeople extends React.Component {

	render() {
		const people = [];

		// Faker people
		_.range(0, 5).forEach((i) => {
			people.push({
				imageName: faker.image.avatar(),
				name: faker.name.findName(),
				role: faker.name.jobTitle(),
			});
		});

		return (
			<section className="peopleList">
				<h2>Staff</h2>
				<div>
					{people.map(person => (
						<ProjectPerson
							key={person.name}
							{...person}
						/>
					))}
				</div>
			</section>
		);
	}
}
