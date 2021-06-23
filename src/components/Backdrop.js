import React from 'react'
import {useGlobalContext} from '../context/globalContext'
const Backdrop = () => {
    const {sidebarOpen, toggleMenu } = useGlobalContext()
    return (
        sidebarOpen && <div onClick={toggleMenu} className="backdrop">
            
        </div>
    )
}

export default Backdrop
