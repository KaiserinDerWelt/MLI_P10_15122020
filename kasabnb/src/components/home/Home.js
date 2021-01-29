import React from 'react';
import Menu from '../menu/Menu';
import Services from './services/Services';
import Footer from '../footer/Footer';
class Home extends React.Component{
    render(){
        return(
            <>
 
			<Menu /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
                    <Services />

		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		<Footer />
 
	  		</>
        )
    }
}


export default Home;