import React from 'react';
//I must provide the properties to propertyFluid in CSS
class SliderProperty extends React.Component {

  render() {

  	return (

  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active host">
		            <img className="img-fluid-host " src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg" alt="background-property-one"/>
		        </div>
		    </div>
		</div>

  	)
    
  }

}

export default SliderProperty;