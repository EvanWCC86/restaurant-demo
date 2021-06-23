import React from 'react'

const ReservationForm = () => {
    return (
        <div className="reservationForm_container">
            <header>
                <h1>Table Reservation</h1>
            </header>
            <form className="reservationForm">
                
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
                    <textarea>Some text...</textarea>
                </div>
                <button type="submit">Reserve a table</button>
            </form>
        </div>
    )
}

export default ReservationForm
