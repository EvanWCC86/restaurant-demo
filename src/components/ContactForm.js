import React from 'react'
import emailjs from 'emailjs-com';
const ContactForm = () => {



function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID , e.target, process.env.REACT_APP_YOUR_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  
    return (
        <div className="contact_section">
            <div className="contactForm_container">
                <header>
                    <h1>Write us a message</h1>
                </header>
                <form className="contactForm" onSubmit={sendEmail}>
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
                        <textarea name="message">
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
