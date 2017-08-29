import React from 'react';
import ProjectPerson from '../../../ProjectPerson';
import './ProjectPeople.css';

export default class ProjectPeople extends React.Component {

	render() {
		const people = [{
			imageName: 'aden.png',
			name: 'Aden Brown',
			role: 'Museum Administrator',
		}, {
			imageName: 'ashiful.png',
			name: 'Md. Ashiful Haque',
			role: 'Museum Administrator',
		}, {
			imageName: 'elliott.png',
			name: 'Elliott Mitchell',
			role: 'Museum Administrator',
		}, {
			imageName: 'igor.png',
			name: 'Igor Pasieczny',
			role: 'Museum Administrator',
		}, {
			imageName: 'michal.png',
			name: 'Michał Pierzchlewicz',
			role: 'Museum Administrator',
		}, {
			imageName: 'paul.png',
			name: 'Paul Pickering',
			role: 'Museum Administrator',
		}, {
			imageName: 'robinson.png',
			name: 'Robinson Greig',
			role: 'Museum Administrator',
		}, {
			imageName: 'tyler.png',
			name: 'Tyler Kirby',
			role: 'Museum Administrator',
		}];

		return (
			<section className="peopleList">
				<h2>People</h2>
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
