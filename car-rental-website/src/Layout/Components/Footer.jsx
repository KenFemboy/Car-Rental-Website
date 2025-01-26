import styles from './Footer.module.css'
import icons from './icons.jsx'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <img src="https://placehold.co/100x50" alt="wesite logo" />
                <p>Tagum Car Rental</p>
                <p>National Highway, Apokon, Tagum City</p>
            </div>

            <div>
                <h4>Our Service</h4>
                <a>Car</a>
                <a>Driver</a>
            </div>

            <div>
                <h4>About Us</h4>
                <a>Why us</a>
                <a>Our Locations</a>
            </div>

            <div >
                <h4>Our Socials</h4>
                <div className={styles.socials}>
                    <a href=''><img src={icons.facebook} alt="" /></a>
                    <a href=''><img src={icons.instagram} alt="" /></a>
                    <a href=''><img src={icons.tiktok} alt="" /></a>
                </div>

            </div>
        </footer >
    )
}
export default Footer