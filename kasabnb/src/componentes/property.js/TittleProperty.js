import React from 'react';


class TittleProperty extends React.Component{
    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <p className="propertyName">oo</p>
                    <p className="propertyLocation">00</p>
                    <div className="propertyTags">
                        <button className="btn Tag">Taggy</button>
                        <button className="btn Tag">Taggy</button>
                        <button className="btn Tag">Taggy</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="ownerSet">
                        <p className="ownerName">ppp</p>
                        <img className="ownerPicture" src="#" alt="#"/>
                        </div>
                        <div className="rating">
                     {/*Conditional rendering here*/}
                    </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default TittleProperty;
