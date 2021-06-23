import React from 'react'
// import {Link} from 'react-router-dom';
import { TiSocialFacebookCircular,TiSocialLinkedinCircular,TiSocialSkypeOutline,TiSocialTwitterCircular,TiSocialTumblerCircular} from 'react-icons/ti';
import {AiOutlinePhone, AiOutlineHome,AiOutlineMail} from 'react-icons/ai';
const Footer = () => {
    return (
        <footer className="footer_section">
            <div className="footer_container">
                <div className="footer_left">
                    <h3>Contacts</h3>
                    <div className="contact">
                        <AiOutlineHome />
                        <p>1234 st-laurant Montreal</p>
                    </div>
                    <div className="contact">
                        <AiOutlinePhone />
                        <p>(514) 555-5555</p>
                    </div>
                    <div className="contact">
                        <AiOutlineMail />
                        <p>restaurant@gmail.com</p>
                    </div>
                </div>
                <div className="footer_center">
                    <h3>Restaurant Demo</h3>
                    <div className="social_icons">
                        <span><TiSocialFacebookCircular /></span>
                        <span><TiSocialLinkedinCircular /></span>
                        <span><TiSocialSkypeOutline /></span>
                        <span><TiSocialTumblerCircular /></span>
                        <span><TiSocialTwitterCircular /></span>
                    </div>
                </div>
                <div className="footer_right">
                    <h3>Working Hours</h3>
                    <p>Mon-Fri: <span>8am-9pm</span></p>
                    <p>Mon-Fri: <span>9am-10pm</span></p>
                    <p>Mon-Fri: <span>9am-9pm</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
