import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import ReservationForm from '../components/ReservationForm'
import ContactForm from '../components/ContactForm'
const HomePage = () => {
    return (
        <div className="homePage">
            
            <Hero />
            <About />
            <Menu />
            <div className="reservationForm_section pageSection">
                <ReservationForm />
            </div>
            <ContactForm />
           
        </div>
    )
}

export default HomePage
