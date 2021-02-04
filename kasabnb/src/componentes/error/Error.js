import React from 'react';
import {NavLink} from "react-router-dom";
import Menu from '../menu/Menu';
//import Footer from '../footer/Footer';

class Error extends React.Component {

	render() {

		return(
			<>
             {/*Component structure goes here*/}
			 <Menu />
			<main role="main" className="flex-shrink-0 mt-5">
			<div className="container">
            <div className="album py-2 bg-light">
            <p className="errorPage">404</p>
            <p className="errorDescription">Oops! It looks like this page doesn’t exist.</p>
            <NavLink to="/" className="nav-link returnHomeLink">Go back to home page</NavLink>
            </div>
		        </div>
	  		</main>
			  {/*<Footer />*/}
	  		</>
		)

	}

}



export default Error;