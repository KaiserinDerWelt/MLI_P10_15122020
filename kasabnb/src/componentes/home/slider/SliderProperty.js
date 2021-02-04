import React from 'react';
//I must provide the properties to propertyFluid in CSS
class SliderProperty extends React.Component {

  render() {

  	return (

  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid propertyFluid" src="#" alt="background-property-one"/>
		        </div>
		    </div>
		</div>

  	)
    
  }

}

export default SliderProperty;