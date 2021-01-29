import React from 'react';
//import './Slider.css';

class Footer extends React.Component {

  render() {

    return (

        <footer className="container">
            <p className="float-right"><a href="#" rel="noopener noreferrer">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} Kasa. All rights reserved. &middot;</p>
        </footer>

    )
    
  }

}

export default Footer;