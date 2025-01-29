import CarsCards from "./cars-img/CarsCards"
import './Rentals.css'
import icons from "./icons"

function Rentals() {
    return (

        <div className="Rentals">
            <div>
                <p>asdasdas</p>
            </div>

            <div>
                <CarsCards carname="Land Cruiser" carimg={icons.land_cruiser} price="3000" />
                <CarsCards carname="M3" carimg={icons.m3} price="5000" />
                <CarsCards carname="Hiace" carimg={icons.hiace} price="5000" />
                <CarsCards carname="M3" carimg={icons.m3} />
                <CarsCards carname="M3" carimg={icons.m3} />
                <CarsCards carname="M3" carimg={icons.m3} />


            </div>

            <div>

            </div>

        </div>

    )
}
export default Rentals