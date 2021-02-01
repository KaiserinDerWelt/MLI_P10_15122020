import React from 'react';
import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron';
import Footer from '../footer/Footer';


class About extends React.Component {

	render() {

		return(

			<>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">
		        
				<Jumbotron />
	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default About;