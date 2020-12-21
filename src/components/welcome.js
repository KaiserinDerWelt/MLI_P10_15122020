import React from 'react';
import "./welcome.css"
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "../../assets/images/logo.svg"
import About from "./About"

const Welcome = ({element}) => { //Elements receives the reference for the stick
    return(
        <main>
            <section className="Welcome">
                <div ref={element}>
                    <img src={""} alt="landingPicture" className="heroPicture"/>
                    <p>Home Anywhere and Everywhere</p>
                </div>
            </section>
            <About/>
        </main>
    )
}

export default Welcome