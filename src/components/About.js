import React from 'react'
import about_pic from '../website-images/image2.jpg'
const About = () => {
    return (
        <section className="about pageSection">
            <div className="container about_container">
                <div className="about_content">
                    <p>Pellentesque habitant morbi tristique senectus netus et malesuada fames turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris Eonec eu ribero sit amet quam egestas semper. Aenean are ultricies mi vitae est tristique senectus et netus et malesuada placerat leo.</p>
                    <button>read more</button>
                </div>
                <img src={about_pic} alt="about_pic" className="toRight" />
            </div>
        </section>
    )
}

export default About
