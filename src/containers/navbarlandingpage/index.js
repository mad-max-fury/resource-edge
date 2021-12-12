import React from 'react'
import { Link, Linkn } from "react-router-dom";
import "./navbarlandingpage.css"
const Navbar = () => {
  // const HandleLogin = () => {
  //   // const history = useHistory()
  //   // history.push('/login')
  // }
  return (
    <nav>
      <div className="sm-screen">
        <div>
          <img src="images/Group.svg"></img>
        </div>
        <div>
          <label htmlFor="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>

          </label>
          <input type="checkbox" id="hamburger" />
          <div className="dropWrapper">
            <div>

              <span className="nav-link"><a>Features</a></span>
              <span className="nav-link"><a>About</a></span>
            </div>
            <div>
              <button ><Link to={'/login'}>Log in</Link></button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg-screen">
        <div>
          <span className="logo">resource edge</span>
          <span className="nav-link"><a>Features</a></span>
          <span className="nav-link"><a>About</a></span>
        </div>
        <div>
          <button>Sign up</button>
          <button ><Link to={'/login'}>Sign in</Link></button>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
