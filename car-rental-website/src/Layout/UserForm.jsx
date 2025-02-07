import './UserForm.css'

function UserForm() {
    const today = new Date().toISOString().split("T")[0];

    const maxDate = (monthsToAdd) => {
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + monthsToAdd);
        return futureDate.toISOString().split("T")[0];
    };

    return (

        <form className="userInput" id='form'>
            <h2>Fill up form</h2>
            <div>
                
               
                    <label>Your Fullname</label>
                    <input type='text' maxLength="40"></input>

                    <label>Your Contact</label>
                    <input type="tel" name='contactNumber' placeholder='Enter Contact Number' maxLength="11" required></input>

                    <label>Pick Up Date</label>
                    <input type="date" id="calendar" name="pickupDate" min={today} max={maxDate(2)}></input>

                    <label>Return Date</label>
                    <input type="date" id="calendar" name="returnDate" min={today} max={maxDate(4)}></input>
                

                
            
                
                    <label>Self Drive or With Driver</label>
                    <select>
                        <option>Self Drive</option>
                        <option>With Driver</option>
                    </select>


                    <label>License</label>
                    <select>
                        <option>Non-Professional</option>
                        <option>Professional</option>
                        <option>International</option>
                    </select>

                    <label>Car Type</label>
                    <select>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Sport</option>
                        <option>Luxury</option>

                    </select>

                    <label>Pickup Or Delivery</label>
                    <select>
                        <option>Pick up</option>
                        <option>Delivery</option>
                    </select>
            </div>
        
                <button type="submit" disabled>SUBMIT</button>
            
            





        </form >
    )
}
export default UserForm