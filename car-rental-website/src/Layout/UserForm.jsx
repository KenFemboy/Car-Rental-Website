import './UserForm.css'

function UserForm() {
    const today = new Date().toISOString().split("T")[0];

    const maxDate = (monthsToAdd) => {
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + monthsToAdd);
        return futureDate.toISOString().split("T")[0];
    };

    return (

        <form className="userInput" id='form' action='./form'>
            <h2>Fill up form</h2>
            <div>
                    <fieldset>
                    <legend>Personal Info</legend>
                    <label>Your Fullname</label>
                    <input type='text' maxLength="40" name='name' required></input>

                    <label>Your Contact</label>
                    <input type="tel" name='contactNumber' placeholder='Enter Contact Number' maxLength="11" required></input>
                    <label>License</label>
                    
                    <select name='licenseType'>
                        <option>Non-Professional</option>
                        <option>Professional</option>
                        <option>International</option>
                    </select>

                    </fieldset>

                
            
                <fieldset>
                    <legend>Preference</legend>
                    <label>Pick Up Date</label>
                    <input type="date" id="calendar" name="pickupDate" min={today} max={maxDate(2)} required></input>
                    <label>Return Date</label>
                    <input type="date" id="calendar" name="returnDate" min={today} max={maxDate(4)} required></input>
                    <label>Self Drive or With Driver</label>
                    <select name="prefDrive">
                        <option >Self Drive</option>
                        <option>With Driver</option>
                    </select>




                    <label>Car Type</label>
                    <select name='carType'>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Sport</option>
                        <option>Luxury</option>

                    </select>

                    <label>Pickup Or Delivery</label>
                    <select name="pickupORdelivery">
                        <option>Pick up</option>
                        <option>Delivery</option>
                    </select>
                    </fieldset>

            </div>
        
                <input type='submit'/>
            
            





        </form >
    )
}
export default UserForm