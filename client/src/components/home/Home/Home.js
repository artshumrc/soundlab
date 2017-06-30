import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import './Home.css';
import Header from '../../navigation/Header';
import AboutSection from './sections/AboutSection';
import PopularCollectionsSection from './sections/PopularCollectionsSection';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Jumbotron className="header-jumbotron">
					<div className="jumbotron-content">
						<h1>Build your digital archive</h1>
						<p>Be visually striking or highly appealing to succeed</p>
						<p>
							<Button bsStyle="secondary">Get started</Button>
							<Button bsStyle="primary">Learn more</Button>
						</p>
					</div>
					<div className="layer" />
				</Jumbotron>
        <AboutSection />
        <PopularCollectionsSection />
			</div>
		);
	}
}

export default Home;
