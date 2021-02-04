import React from 'react';
//We always must import the components to can use them in the react application
import Menu from '../menu/Menu';
//import Slider from './slider/Slider';
import Footer from '../footer/Footer';
// Create a constant to produce the page from a json file and just export the data
// as constants.


class PropertyPage extends React.Component {

	render() {
		return(
			<>
			<Menu />
			<main role="main" className="flex-shrink-0 mt-5">
		        <div className="container">
		  	  		
		        </div>
	  		</main>
	  		<Footer />
	  		</>

		)

	}

}

export default PropertyPage;