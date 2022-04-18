import React from 'react'
import ContactMe from '../ContactMe/ContactMe'
import Services from '../Services/Services.comp'
import Slider from '../Slider/Slider'

const Home = () => {
    return (
        <div>
            <Slider />
            <Services />
            <ContactMe />
        </div>
    )
}

export default Home