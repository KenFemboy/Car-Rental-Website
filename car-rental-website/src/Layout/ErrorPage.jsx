import { Link } from 'react-router-dom'
import './ErrorPage.css'
function ErrorPage() {
    return (
        <>
            <div className='errorpage'>
                <h1>Ooops an Error Occured</h1>
                <Link to="Car-Rental-Website/"><a>Click here to go back</a></Link>
            </div>
        </>
    )
}
export default ErrorPage