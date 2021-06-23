import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
    return (
        <section className="hero pageSection">
            <div className="hero_content container">
                <h1>Delicious Food</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor dolorem
laudantium officia voluptas. Aspernatur cupiditate ducimus eligendi reprehenderit!</p>
                <Link to="/reservation">
                    <button className="toLeft">Reservation</button>  
                </Link>  
            </div>
           
        </section>
    )
}

export default Hero
