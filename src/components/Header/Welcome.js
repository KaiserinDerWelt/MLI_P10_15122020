import React from 'react'
import './Welcome.css'
import Hero from '../../assets/images/hero.png'
import About from './About'
import 'bootstrap/dist/css/bootstrap.css';

const Welcome = ({element}) => {
    return (
            <main>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Hero} alt='hero' className='heroPic' />
                        <p className='textOverlay'>Home, anywhere and everywhere</p>
                        {/*<button className='welcome__cta-primary'> 
                           Contact us
                        </button>*/}
                         
                    </div>
                </section>
                <About />
                <About />
                <About />
            </main>
    )
}

export default Welcome
