import CarsCards from "./cars-img/CarsCards"
import './Rentals.css'
import icons from "./icons"

function Rentals() {
    return (

        <div className="Rentals" >
            <div className="RentalsInfo">

                <img src={icons.mercedes_sedan} />


                <div>
                    <h2>Feel the best experience with our rental deals</h2>
                    <div>
                        <img src="https://placehold.co/50" />
                        <div>
                            <h4>Deals for Every Budget</h4>
                            <p>Looking for an affordable ride? Rent our cars!</p>
                        </div>

                    </div>
                    <div>
                        <img src="https://placehold.co/50" />
                        <div>
                            <h4>Deals for Every Budget</h4>
                            <p>Looking for an affordable ride? Rent our cars!</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://placehold.co/50" />
                        <div>
                            <h4>Deals for Every Budget</h4>
                            <p>Looking for an affordable ride? Rent our cars!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="title">
                <h4>Best Offers</h4>
                <h2>Our Featured Cars</h2>
            </div>

            <div id="carsDisplay" >
                <CarsCards carname="Land Cruiser" carimg={icons.land_cruiser} price="3000" cartype="SUV" cardoor="4" carseat="4" cargas="Gas/Petrol" />
                <CarsCards carname="M3" carimg={icons.m3} price="5000" cartype="Sedan" cardoor="4" carseat="4" cargas="Gas/Petrol" />
                <CarsCards carname="Hiace" carimg={icons.hiace} price="5000" cartype="SUV" cardoor="4" carseat="8" cargas="Diesel" />
                <CarsCards carname="Mercedes" carimg={icons.mercedes_sedan} price="1500" cartype="Sedan" cardoor="2" carseat="2" cargas="Gas" />

            </div>

            <div>

            </div>

        </div>

    )
}
export default Rentals