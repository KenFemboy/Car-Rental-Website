import styles from './Main.module.css'
function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.introText}>
                <h1>
                    Rent our well maintained cars at the best price
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni officiis debitis blanditiis
                </p>
            </div>

            <div>
                <button>Rent Now</button>
                <button>Browse Cars</button>
            </div>

            <div className={styles.userInput}>


                <div>
                    <p>Your Contact</p>
                    <input type="number"></input>
                </div>
                <div>
                    <p>Pick Up Date</p>
                    <input type="date"></input>
                </div>
                <div>
                    <p>Return Date</p>
                    <input type="date"></input>
                </div>

                <div>
                    <button type="submit">Submit</button>

                </div>


            </div>

            <div className={styles.carBrands}>
                <img src="https://placehold.co/150" alt="" />
                <img src="https://placehold.co/150" alt="" />
                <img src="https://placehold.co/150" alt="" />
                <img src="https://placehold.co/150" alt="" />
                <img src="https://placehold.co/150" alt="" />
                <img src="https://placehold.co/150" alt="" />

            </div>

            <div className={styles.infoSection}>
                <h2>How it works</h2>
                <div className={styles.Cards}>

                    <div>
                        <img src="https://placehold.co/80" alt="" />
                        <h4>Contact</h4>
                        <p>qverqvreqvqvqv  saasdasdasdasdasadadsdasdadasdsadas evrwvdsfvafdvdffvas</p>
                    </div>

                    <div>
                        <img src="https://placehold.co/80" alt="" />
                        <h4>Pick Up</h4>
                        <p>vqerveqr vqweveqvreqrv</p>
                    </div>

                    <div>
                        <img src="https://placehold.co/80" alt="" />
                        <h4>Choose Your Ride</h4>
                        <p>adadaf qrqwerqww rvqrqrev    </p>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Main