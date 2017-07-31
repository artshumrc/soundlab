import React from 'react';
import './Home.css';
import Header from '../../navigation/Header';
import Footer from '../../navigation/Footer';
import HomeCover from './sections/HomeCover';
import AboutSection from './sections/AboutSection';
import PopularCollectionsSection from './sections/PopularCollectionsSection';
import FeaturesSection from './sections/FeaturesSection';
import TestimonialSection from './sections/TestimonialSection';
import WhyUsSection from './sections/WhyUsSection';
import BetterExperienceSection from './sections/BetterExperienceSection';
import PricingSection from './sections/PricingSection';
import CreateAccountSection from './sections/CreateAccountSection';

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<Header />
				<HomeCover />
				<FeaturesSection />
				<PopularCollectionsSection />
				<WhyUsSection />
				<PricingSection />
				<Footer />
			</div>
		);
	}
}

export default Home;
