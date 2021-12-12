import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./signIn.css"
const SignIn = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <main className='signIn'>
      <img src='images/authLogo.svg' />
      <form>
        <header>
          <img src="images/Alogo.svg" />
        </header>
        <main>
          <div>
            <h3>Log In</h3>
            <p>Access your resource edge account</p>
          </div>
          <div>
            {
              IsLoggedIn ? null
                : <>
                  <div>
                    <h3>Ositadinma Nwangwu</h3>
                    <p>o.nwangwu@genesystechhub.com</p>
                  </div>
                  <img src='images/edit-filled.svg'></img>
                </>
            }
          </div>
          <div className='thirdDiv'>
            {
              IsLoggedIn ? <>
                <h3>Email Address</h3>
                <div>
                  <input type="email" placeholder='Enter email' />
                  <div className='empty-to-fill'></div>
                </div>
                <span>✔</span>
              </>
                : <>

                  <h3>Password</h3>
                  <div>
                    <input type="password" placeholder='Enter password' />
                    <div className='empty-to-fill' style={{ background: "#0052CC" }}></div>
                  </div>
                  <img src='images/watch.svg' />
                </>
            }
          </div>
          <div>
            <div className='empty'></div>
            <Link to={'/reset'}>Forget password?</Link>
          </div>

        </main>

      </form>
    </main>
  )
}

export default SignIn

