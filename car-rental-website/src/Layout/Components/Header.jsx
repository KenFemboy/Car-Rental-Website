import { NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <nav className="nav">
            <img src="https://placehold.co/100x50" alt="" />
            <NavLink to="/Car-Rental" ><h3>Home</h3></NavLink>
            <NavLink to="Car-Rental/Rentals" ><h3>Rent</h3></NavLink>
            <NavLink to="Car-Rental/Locations"><h3>Locations</h3></NavLink>
            <NavLink to="Car-Rental/Contact"><h3>Contact</h3></NavLink>
        </nav>
    )
}
export default Header