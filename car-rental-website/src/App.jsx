import Header from "./Layout/Components/Header"
import Footer from "./Layout/Components/Footer"
import Main from "./Layout/Components/Main"
import ErrorPage from "./Layout/ErrorPage"
import Rentals from "./Layout/Components/Rentals"
import UserForm from "./Layout/UserForm"
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function App() {


  return (
    <>

      <div>
        <Router>

          <Routes>
            <Route path="/Car-Rental-Website" element={<Navigate to="/Car-Rental" replace/>}></Route>
            <Route path="/Car-Rental" element={
            <> 
              <Header />
              <Main />
              <Rentals/>
              <UserForm/>
            </> 
          } />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        
        <Footer />

      </div>

    </>
  )
}

export default App
