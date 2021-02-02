import React from 'react';

class Slider extends React.Component {

  render() {

  	return (

  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid" src="assets/img/background.png" alt="background-kasa"/>
		        </div>
				<div className="welcomeTitle">Home anywhere and everywhere</div>
		    </div>
		</div>

  	)
    
  }

}

export default Slider;