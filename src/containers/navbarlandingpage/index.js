import React from 'react'
import "./navbarlandingpage.css"
const Navbar = () => {
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
              <button>Log in</button>
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
          <button>Sign in</button>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
