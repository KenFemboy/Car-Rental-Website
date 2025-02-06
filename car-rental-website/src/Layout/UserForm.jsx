import './UserForm.css'

function UserForm() {
    const today = new Date().toISOString().split("T")[0];

    const maxDate = (monthsToAdd) => {
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + monthsToAdd);
        return futureDate.toISOString().split("T")[0];
    };

    return (

        <form className="userInput">



            <label>Your Contact</label>
            <input type="tel" name='contactNumber' placeholder='Enter Contact Number' maxLength="11" required></input>

            <label>Pick Up Date</label>
            <input type="date" id="calendar" name="pickupDate" min={today} max={maxDate(2)}></input>

            <label>Return Date</label>
            <input type="date" id="calendar" name="returnDate" min={today} max={maxDate(4)}></input>

            <button type="submit">SUBMIT</button>





        </form >
    )
}
export default UserForm