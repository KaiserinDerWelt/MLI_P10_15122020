import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Welcome.css'
import Offer from './PropertyOffer'

const Welcome = ({element}) => {
    return (
            <main>
                <div className='container-fluid welcome'>
                    <div className='container-fluid pictureArea'>
                        <p className='textOverlay'>Home, anywhere and everywhere</p>
                    </div>
                    </div>
                <Offer/>
            </main>
    )
}

export default Welcome
