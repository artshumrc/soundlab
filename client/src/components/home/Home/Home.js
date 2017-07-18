import React from 'react';
import './Home.css';
import Header from '../../navigation/Header';
import Cover from './sections/Cover';
import AboutSection from './sections/AboutSection';
import PopularCollectionsSection from './sections/PopularCollectionsSection';
import FeaturesSection from './sections/FeaturesSection';
import TestimonialSection from './sections/TestimonialSection';
import WhyUsSection from './sections/WhyUsSection';
import BetterExperienceSection from './sections/BetterExperienceSection';
import PricingSection from './sections/PricingSection';
import CreateAccountSection from './sections/CreateAccountSection';
import Footer from './sections/Footer';

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<Header />
				<Cover />
				<AboutSection />
				<PopularCollectionsSection />
				<FeaturesSection />
				<TestimonialSection />
				<WhyUsSection />
				<BetterExperienceSection />
				<PricingSection />
				<CreateAccountSection />
				<Footer />
			</div>
		);
	}
}

export default Home;
