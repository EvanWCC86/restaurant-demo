import React from 'react'
import {useGlobalContext} from '../context/globalContext'
import {Link} from 'react-router-dom';
import { TiSocialFacebookCircular,TiSocialLinkedinCircular,TiSocialSkypeOutline,TiSocialTwitterCircular,TiSocialTumblerCircular} from 'react-icons/ti';
import {AiOutlineClose} from 'react-icons/ai'
const Sidebar = () => {
    
    const {sidebarOpen, toggleMenu} = useGlobalContext()
    return (
        <aside className={`sidebar ${sidebarOpen ? "showSidebar" : ""}`}>
           <div className="sidebar_container">
               <div className="sidebar_header">
                   
                   <h3>Restaurant Demo</h3>
                   <AiOutlineClose onClick={toggleMenu} />
               </div>
               <ul className="sidebar_links">
                   
                    <li onClick={toggleMenu}><Link to="/">Home</Link> <hr /></li>
                    
                    <li onClick={toggleMenu}><Link to="/about">About Us</Link> <hr /></li>
                    
                    <li onClick={toggleMenu}><Link to="/menu">Menu</Link> <hr /></li>
                    <li onClick={toggleMenu}><Link to="/reservation">Reservation</Link><hr /></li>
                    <li onClick={toggleMenu}><Link to="/news">News</Link> <hr /></li>
                    <li onClick={toggleMenu}><Link to="/contact">Contact</Link> <hr /></li>
                </ul>
                <footer>
                    <span><TiSocialFacebookCircular /></span>
                    <span><TiSocialLinkedinCircular /></span>
                    <span><TiSocialSkypeOutline /></span>
                    <span><TiSocialTumblerCircular /></span>
                    <span><TiSocialTwitterCircular /></span>
                </footer>
           </div>
        </aside>
    )
}

export default Sidebar
