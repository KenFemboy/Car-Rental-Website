import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    function scrollTo(event, id) {
        event.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <nav className="nav">
            <img src="https://placehold.co/100x50" alt="" />
            <a  onClick={(event) => scrollTo(event, 'form')}><h3 >Rent</h3></a>
            <a><h3>Locations</h3></a>
            <a><h3>Contact</h3></a>
        </nav>
    )
}
export default Header