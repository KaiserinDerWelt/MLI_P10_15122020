import React from 'react';
//import Menu from '../menu/Menu';
import Error from '../error/Error';
//import Footer from '../footer/Footer';

class FourHundred extends React.Component {

	render() {

		return(
			<>
			<Menu />
			<main role="main" className="flex-shrink-0 mt-5">
			<div className="container">
			<Error/>
		        </div>
	  		</main>
	  		{/*<Footer />*/}
	  		</>
		)

	}

}



export default FourHundred;