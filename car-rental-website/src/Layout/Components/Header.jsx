import styles from './Header.module.css'
function Header() {
    return (
        <nav className={styles.nav}>
            <img src="https://placehold.co/100x50" alt="" />
            <h3>Rent</h3>
            <h3>Locations</h3>
            <h3>Contact</h3>
        </nav>
    )
}
export default Header