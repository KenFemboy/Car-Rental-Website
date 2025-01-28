import './CarsCards.css'
function CarsCards() {
    return (
        <div className="carscards">
            <img src="https://placehold.co/100"></img>
            <h1>- Subaru  -</h1>

            <p>Starting at /Day</p>
            <div className='carInfo'>
                <div><img src='https://placehold.co/30' /><p>SUV</p></div>
                <div><img src='https://placehold.co/30' /><p>4 Doors</p></div>
                <div><img src='https://placehold.co/30' /><p>5 Seats</p></div>
                <div><img src='https://placehold.co/30' /><p>Gas/Diesel</p></div>

            </div>

            <div>
                <button>Details</button>
                <button>Book</button>
            </div>


        </div>
    )
}
export default CarsCards