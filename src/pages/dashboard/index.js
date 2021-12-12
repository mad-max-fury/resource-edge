import { useState, useEffect } from 'react'
import Avatar from '../../components/Avater'
import DashBoardContent from '../../containers/Dashboard'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Dashboard.css"

const Dashboard = () => {


  const [IsLoggedIn, setIsLoggedIn] = useState(true)
  // const [IsLoggedIn, setIsLoggedIn] = useState(true)


  const navigate = useNavigate()
  const isAuth = JSON.parse(localStorage.getItem("isAuth"))
  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  }, [])
  return (
    <section className="Dashboard">
      <nav className="Dashboard-nav">
        <div className="Dashboard-nav-menu">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <div className="logo">
            <h1>resource edge</h1>
          </div>
          <div className="text">
            <span>TM Dashboard</span>
          </div>

        </div>
        <div className="Dashboard-nav-avaterWrapper">
          {
            IsLoggedIn ? <Avatar /> : null
          }
        </div>

      </nav>
      <DashBoardContent />
    </section>
  )
}

export default Dashboard
