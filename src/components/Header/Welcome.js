import React from 'react'
import './Welcome.css'
// import HeroPicture from '../../assets/images/hero.png'
import Logo from '../../assets/images/logo.svg'
import About from './About'

const Welcome = ({element}) => {
    return (
            <main>
                <section className='container-fluid welcome'>
                    <div ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <p>Home anywhere and everywhere</p>
                    </div>
                </section>
                <About />
            </main>
    )
}

export default Welcome
