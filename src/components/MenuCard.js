import React from 'react'

const MenuCard = ({item}) => {
    const {title, desc, img, price} = item
    return (
        <figure>
            <div className="img_container">
                <img src={img} alt={title} />
            </div>
            <figcaption>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="price">
                    <hr />
                    <p>${price}</p>
                </div>
            </figcaption>
        </figure>
    )
}

export default MenuCard
