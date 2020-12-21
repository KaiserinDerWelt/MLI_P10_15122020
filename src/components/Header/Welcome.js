import React from 'react'
import './Welcome.css'
import Hero from '../../assets/images/hero.png'
import About from './About'

const Welcome = ({element}) => {
    return (
            <main>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Hero} alt='hero' className='heroPic' />
                        <p>Home, anywhere and everywhere</p>
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
