import styles from './Main.module.css'
import icons from './icons.jsx'

function Main() {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.introText}>
                    <h1>
                        Rent our well maintained cars at the best price
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni officiis debitis blanditiis
                    </p>

                </div>

                <div className={styles.mainButton}>
                    <button>Rent Now</button>
                    <button>Browse Cars</button>
                </div>

                <div className={styles.userInput}>


                    <div>
                        <p>Your Contact</p>
                        <input type="number" name='contactNumber' className={styles.getuserInput} placeholder='Enter Contact Number'></input>
                    </div>
                    <div>
                        <p>Pick Up Date</p>
                        <button className={styles.getuserInput}>Select Pickup Date</button>


                    </div>
                    <div>
                        <p>Return Date</p>
                        <button className={styles.getuserInput}>Select Return Date</button>
                    </div>

                    <div>
                        <button type="submit">SUBMIT</button>

                    </div>


                </div>
            </div>

            <div className={styles.carBrands}>
                <img src={icons.bmw} alt="" />
                <img src={icons.honda} alt="" />
                <img src={icons.mercedes} alt="" />
                <img src={icons.mitsubishi} alt="" />
                <img src={icons.toyota} alt="" />

            </div>

            <div className={styles.infoSection}>
                <h2>How it works</h2>
                <div className={styles.Cards}>

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