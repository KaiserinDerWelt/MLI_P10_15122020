import React from 'react';
import {NavLink} from "react-router-dom";


class Menu extends React.Component {

  render() {
//<img className="img-fluid" src="assets/img/background.png" alt="background-kasa"/>
  	return (

  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">

		    <NavLink to="/" className="navbar-brand">
				<img className="Logo" src="assets/img/logo.png" alt="logo-casa"/>
			</NavLink>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">

			        <li className="nav-item">
						{/** Nav Link it works to  point the paths to the router*/}
			          	<NavLink to="/" className="nav-link">Home </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/about" className="nav-link">About</NavLink>
			        </li>
			    </ul>
		    </div>		    

		</nav>

  	)
    
  }

}

export default Menu;