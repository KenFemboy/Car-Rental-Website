import './Main.css'
import icons from './icons.jsx'
import UserForm from '../UserForm.jsx'
function Main() {

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
                    <button>Rent Now</button>
                    <button>Browse Cars</button>
                </div>



            </div>
            <div className="carBrands">
                <img src={icons.bmw} alt="" />
                <img src={icons.honda} alt="" />
                <img src={icons.mercedes} alt="" />
                <img src={icons.mitsubishi} alt="" />
                <img src={icons.toyota} alt="" />

            </div>

            <UserForm />

            <div className="infoSection">
                <h2>How it works</h2>
                <div className="Cards">

                    <div>
                        <img src={icons.calendar_icon} alt="" />
                        <h4>Schedule</h4>
                        <p>qverqvreqvqvqv  saasdasdas dasdasa dadsdasd adasdsadas evrwvdsfv afdvdffvas</p>
                    </div>

                    <div>
                        <img src={icons.location_icon} alt="" />
                        <h4>Pick Up</h4>
                        <p>vqerveqr vqweveqvreqrv</p>
                    </div>

                    <div>
                        <img src={icons.bookacar_icon} alt="" />
                        <h4>Choose Your Ride</h4>
                        <p>adadaf qrqwerqww rvqrqrev    </p>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Main