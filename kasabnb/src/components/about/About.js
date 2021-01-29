import React from 'react';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';

class About extends React.Component{
    render(){
        return(
            <>
			<Menu />
			<main role="main" className="flex-shrink-0 mt-5">
			<h1> More Content Goes Here</h1>
	  		</main>
	  		<Footer />
	  		</>
        )
    }
}

export default About;
