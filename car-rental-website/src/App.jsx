import Header from "./Layout/Components/Header"
import Footer from "./Layout/Components/Footer"
import Main from "./Layout/Components/Main"
import ErrorPage from "./Layout/ErrorPage"
import Rentals from "./Layout/Components/Rentals"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <>

      <div>

        <Router>
          <Header />

          <Routes>
            <Route path="Car-Rental-Website/" element={<Main />} />
            <Route path="Car-Rental-Website/Rentals/" element={<Rentals />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>


        <Footer />

      </div>

    </>
  )
}

export default App
