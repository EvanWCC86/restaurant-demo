import React from 'react'
import emailjs from 'emailjs-com';
const ReservationForm = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_RESERVATION_TEMPLATE_ID , e.target, process.env.REACT_APP_YOUR_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }


    return (
        <div className="reservationForm_container">
            <header>
                <h1>Table Reservation</h1>
            </header>
            <form className="reservationForm" onSubmit={sendEmail}>
                
                <div>
                    <input type="text" name="firstName" placeholder="First Name" />
                </div>
                <div>
                    <input type="text" name="lastName" placeholder="Last Name" />
                </div>
                <div>
                    <input type="number" name="phoneNumber" placeholder="Phone" />

                </div>
                <div>
                    
                    <select name="person" className="person">
                        <option value="1 person">1 Person</option>
                        <option value="2 person">2 Person</option>
                        <option value="3 person">3 Person</option>
                    </select>
                </div>
                <div>
                    <input type="date" name="date" placeholder="Date" />
                </div>
                <div>
                    <input type="time" name="time" placeholder="Time" />
                </div>
                <div>
                    <textarea name="message">Some text...</textarea>
                </div>
                <button type="submit">Reserve a table</button>
            </form>
        </div>
    )
}

export default ReservationForm
