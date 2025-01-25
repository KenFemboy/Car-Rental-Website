import Header from "./Layout/Components/Header"
import Footer from "./Layout/Components/Footer"
import Main from "./Layout/Components/Main"
import ErrorPage from "./Layout/ErrorPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>

      <div>
        <Header />

        <Router>
          <Routes>
            <Route path="Car-Rental-Website/" element={<Main />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>


        <Footer />

      </div>

    </>
  )
}

export default App
