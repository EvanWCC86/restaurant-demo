import React from 'react'
import {useGlobalContext} from '../context/globalContext'
import MenuCard from './MenuCard';
const Menu = () => {
    const {menuData} = useGlobalContext();
    return (
        <section className="menu pageSection">
            <div className="menu_container">
                <header>
                    <h2 class="sub-headline">
                        <span class="first-letter">D</span>iscover
                     </h2>
                     <h1 class="headline headline-dark">Menu</h1>
                    <p>choose your best food</p>
                    <div className="menu_navbar">
                        <button>All</button>
                        <button>breakfast</button>
                        <button>lunch</button>
                        <button>drinks</button>
                        <button>dinner</button>
                    </div>
                </header>
                <div className="menu_foods">
                    <div className="foods_container container">
                        {menuData.map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
