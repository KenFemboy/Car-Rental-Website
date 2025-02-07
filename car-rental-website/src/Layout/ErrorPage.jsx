import { Link, NavLink } from 'react-router-dom'
import './ErrorPage.css'
function ErrorPage() {
    return (
        <>
            <div className='errorpage'>
                <h1>Ooops an Error Occured</h1>
                <NavLink to="/Car-Rental"><a>Click here to Go Back</a></NavLink>
            </div>
        </>
    )
}
export default ErrorPage