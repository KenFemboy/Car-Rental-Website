import './UserForm.css'

function UserForm() {
    const today = new Date().toISOString().split("T")[0];

    const maxDate = (monthsToAdd) => {
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + monthsToAdd);
        return futureDate.toISOString().split("T")[0];
    };

    return (

        <div className="userInput">



            <label>Your Contact</label>
            <input type="number" name='contactNumber' placeholder='Enter Contact Number'></input>

            <label>Pick Up Date</label>
            <input type="date" id="calendar" name="pickupDate" min={today} max={maxDate(2)}></input>





            <label>Return Date</label>
            <input type="date" id="calendar" name="returnDate" min={today} max={maxDate(4)}></input>



            <button type="submit">SUBMIT</button>





        </div >
    )
}
export default UserForm