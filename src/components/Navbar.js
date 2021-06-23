import React from 'react'
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import {useGlobalContext} from '../context/globalContext'
const Navbar = () => {
    const {toggleMenu} = useGlobalContext();
    return (
        <nav>
            <div className="container nav_container">
                <h1>Restaurant Demo<span>.</span></h1>
                <button className="menuButton" onClick={() => toggleMenu()}><GiHamburgerMenu /></button>
                <ul className="navbar_links">
                    <li><Link to="/"><span>H</span>ome</Link></li>
                    <li><Link to="/about"><span>A</span>bout Us</Link></li>
                    <li><Link to="/menu"><span>M</span>enu</Link></li>
                    <li><Link to="/reservation"><span>R</span>eservation</Link></li>
                    <li><Link to="/news"><span>N</span>ews</Link></li>
                    <li><Link to="/contact"><span>C</span>ontact</Link></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
