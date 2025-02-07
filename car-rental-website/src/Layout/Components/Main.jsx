import './Main.css'
import icons from './icons.jsx'

function Main() {
    function scrollTo( id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <div>
            <div className="main">
                <div className="introText">
                    <h1>
                        Rent our well maintained cars at the best price
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni officiis debitis blanditiis
                    </p>

                </div>

                <div className="mainButton">
                    <button onClick={() => scrollTo('form')}>Rent Now</button>
                    <button onClick={() => scrollTo('carsDisplay')}>Browse Cars</button>
                </div>



            </div>
            <div className="carBrands" >
                <img src={icons.bmw} alt="" />
                <img src={icons.honda} alt="" />
                <img src={icons.mercedes} alt="" />
                <img src={icons.mitsubishi} alt="" />
                <img src={icons.toyota} alt="" />

            </div>


            <div className="infoSection">
                <h2>How it works</h2>
                <div className="Cards">

                    <div>
                        <img src={icons.calendar_icon} alt="" />
                        <h4>Schedule</h4>
                        <p>Set an appointment with us. Schedule your ride for as long as it takes.</p>
                    </div>

                    <div>
                        <img src={icons.location_icon} alt="" />
                        <h4>Pick Up</h4>
                        <p>You can choose to pick up your ride on our closest location or choose to have it delivered for you</p>
                    </div>

                    <div>
                        <img src={icons.bookacar_icon} alt="" />
                        <h4>Choose Your Ride</h4>
                        <p>Pick whats suitable for you. We prioritize your safety, comfort and satisfaction</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Main