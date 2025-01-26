import { Link } from 'react-router-dom'
import styles from './Header.module.css'
function Header() {
    return (
        <nav className={styles.nav}>
            <img src="https://placehold.co/100x50" alt="" />
            <Link to="Car-Rental-Website/Rentals" ><h3>Rent</h3></Link>
            <Link to="Car-Rental-Website/Locations"><h3>Locations</h3></Link>
            <Link to="Car-Rental-Website/Contact"><h3>Contact</h3></Link>
        </nav>
    )
}
export default Header