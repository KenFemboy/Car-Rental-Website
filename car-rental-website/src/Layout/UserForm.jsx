import './UserForm.css'
function UserForm() {
    return (
        <div className="userInput">
            <div>
                <p>Your Contact</p>
                <input type="number" name='contactNumber' className="getuserInput" placeholder='Enter Contact Number'></input>
            </div>
            <div>
                <p>Pick Up Date</p>
                <button className="getuserInput" onClick={() => document.getElementById('calendar').showPicker()}><input type="date" id="calendar" name="pickupDate"></input>Pickup Date</button>



            </div>
            <div>
                <p>Return Date</p>
                <button className="getuserInput" onClick={() => document.getElementById('calendar').showPicker()}><input type="date" id="calendar" name="returnDAte"></input>Return Date</button>
            </div>

            <div>
                <button type="submit">SUBMIT</button>

            </div>


        </div>
    )
}
export default UserForm