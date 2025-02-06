import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <nav className="nav">
            <img src="https://placehold.co/100x50" alt="" />
            <Link to="/" ><h3>Home</h3></Link>
            <Link to="/Rentals" ><h3>Rent</h3></Link>
            <Link to="/Locations"><h3>Locations</h3></Link>
            <Link to="/Contact"><h3>Contact</h3></Link>
        </nav>
    )
}
export default Header