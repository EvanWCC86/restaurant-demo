import React from 'react'

const ContactForm = () => {
    return (
        <div className="contact_section">
            <div className="contactForm_container">
                <header>
                    <h1>Write us a message</h1>
                </header>
                <form className="contactForm">
                    <div>
                        <input type="text" placeholder="First Name" name="firstName" />
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name" name="lastName" />
                    </div>
                    <div>
                        <input type="number" placeholder="Phone" name="phone" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <div>
                        <textarea>
                            Message
                        </textarea>
                    </div>
                    <button>send a message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
