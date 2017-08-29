import React from 'react';
import Button from '../../../../common/buttons/Button';

import './ProjectAbout.css';

export default class ProjectAbout extends React.Component {

	render() {
		return (
			<section className="projectAbout">
				<h2>About</h2>
				<p>
					Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisuque
					adiungere vites conveniat quae curum boum qui cultus habendo sit pecori
					apibus quanta experientia parcis hinc canere incipiam
				</p>
				<Button
					href={'/articles/example-article'}
					light
					outline
				>
					Read more
				</Button>
			</section>
		);
	}
}
