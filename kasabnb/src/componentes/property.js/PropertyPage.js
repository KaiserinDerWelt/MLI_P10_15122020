import React from 'react';
//We always must import the components to can use them in the react application
import Menu from '../menu/Menu';
import SliderProperty from './slider/SliderProperty';
import Footer from '../footer/Footer';
import SliderProperty from '../home/slider/SliderProperty';
// Create a constant to produce the page from a json file and just export the data
// as constants.


class PropertyPage extends React.Component {

	render() {
		return(
			<>
			<Menu />
			<main role="main" className="flex-shrink-0 mt-5">
		        <div className="container">
		  	  		<SliderProperty/>
		        </div>
	  		</main>
	  		<Footer />
	  		</>

		)

	}

}

export default PropertyPage;