import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import ProjectPerson from '../../../ProjectPerson';

import './ProjectPeople.css';


class ProjectPeople extends React.Component {

	render() {
		const { people } = this.props;

		if (!people || !people.length) {
			return null;
		}

		const _people = _.sortBy(people, (person) => {
			const nameParts = person.user.name.split(' ');
			const lastName = nameParts[nameParts.length - 1];
			return lastName;
		});

		return (
			<section className="peopleList">
				<h2>People</h2>
				<div>
					{_people.map(person => (
						<ProjectPerson
							key={person.user.username}
							{...person}
						/>
					))}
				</div>
			</section>
		);
	}
}

ProjectPeople.propTypes = {
	people: PropTypes.array,
};

ProjectPeople.defaultProps = {
	people: [],
};

export default ProjectPeople;
