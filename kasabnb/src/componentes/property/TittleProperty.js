import React from 'react';


class TittleProperty extends React.Component{
    render(){
        return(
            <>
              <main role="main" className="flex-shrink-0 mt-5">
		        <div className="album py-2 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-9">
                    <p className="propertyName">Cozy loft on the Canal Saint-Martin</p>
                    <p className="propertyLocation">Paris, France</p>
                    <div className="propertyTags">
                        <button className="btn Tag">Taggy</button>
                        <button className="btn Tag">Taggy</button>
                        <button className="btn Tag">Taggy</button>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="ownerSet">
                        <p className="ownerName">Jean Paul Lemaire</p>
                        <img className="ownerPicture" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg" alt="#"/>
                        </div>
                        <div className="rating">
                     {/*Conditional rendering here*/}
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

export default TittleProperty;
