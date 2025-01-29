import './CarsCards.css'
import car_door from './icons/car-door.png'
import car_gas from './icons/car-gas.png'
import car_logo from './icons/car-logo.png'
import car_seat from './icons/car-seat.png'


function CarsCards(props) {
    return (
        <div className="carscards">
            <img src={props.carimg}></img>
            <h1>- {props.carname}  -</h1>

            <p>Starting at {props.price} /Day</p>
            <div className='carInfo'>
                <div><img src={car_logo} /><p>SUV</p></div>
                <div><img src={car_door} /><p>4 Doors</p></div>
                <div><img src={car_seat} /><p>5 Seats</p></div>
                <div><img src={car_gas} /><p>Gas/Diesel</p></div>

            </div>

            <div>
                <button>Details</button>
                <button>Book</button>
            </div>


        </div>
    )
}
export default CarsCards