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
                <div><img src={car_logo} /><p>{props.cartype}</p></div>
                <div><img src={car_door} /><p>{props.cardoor} doors</p></div>
                <div><img src={car_seat} /><p>{props.carseat} seats</p></div>
                <div><img src={car_gas} /><p>{props.cargas}</p></div>

            </div>

            <div>
                <button>Details</button>
                <button>Book</button>
            </div>


        </div>
    )
}
export default CarsCards