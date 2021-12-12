import { useState } from 'react'
import "./Avatar.css"
import { useNavigate } from 'react-router-dom'
const Avatar = () => {
  const navigate = useNavigate()
  const [IsActive, setIsActive] = useState(false)
  const handleLogOut = () => {
    localStorage.setItem("isAuth", false)
    navigate('/')
  }
  return (
    <div className="avatarWrapper">
      <label htmlFor="avater">
        <img src="images/avatarIcon.svg" alt="avater"></img>
      </label>
      <input type="checkbox" id="avater" />
      <div className="dropWrapper">
        <div>
          <h1>OSITADINMA NWANGWU</h1>
          <span>Profile</span>
        </div>
        <div>
          <span>Use Resource Edge as</span>
          <div >
            <img src="images/Talent Manager.svg"></img>
            <p>Talent Manager</p>
            {
              !IsActive ? <img src="images/check.svg"></img> : null
            }

          </div>
          <div>
            <img src="images/Employee.svg"></img>

            <p>Employee</p>
            {
              IsActive ? <img src=""></img> : null
            }

          </div>
        </div>
        <div>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      </div>


    </div>
  )
}

export default Avatar
