import React from 'react';

class DescriptionPropertyAccordion extends React.Component{
    render(){
        return(
            <>
            <main role="main" className="flex-shrink-0 mt-5">
		        <div className="album py-2 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <div className="accordionDescription accordionContainerSmall">
                    <div id="accordion">
                    <div className="card cardLight">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed textToggle" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Description
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body textToggleDescription">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
    </div>
  </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="accordionEquipment accordionContainerSmall">
                        <div id="accordion">
                    <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed textToggle" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
         Equipment
        </button>
      </h5>
    </div>

    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body textToggleDescription">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
    </div>
  </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
	  		</main>
            </>
        )
    }
}

export default DescriptionPropertyAccordion;