import React from 'react';
import Menu from '../menu/Menu';
import Slider from '../home/slider/Sliderabout';
import Accordion from '../about/accordion/Accordion';
import Footer from '../footer/Footer';
//It is always important to add the correct relative path otherwise errors prompt and
//the app does not render.


class About extends React.Component {

	render() {

		return(
			<>
			<Menu />
			<main role="main" className="flex-shrink-0 mt-5">
			<div className="container">
				<Slider />
		        </div>
				<Accordion />
	  		</main>
	  		<Footer />
	  		</>
		)

	}

}

export default About;