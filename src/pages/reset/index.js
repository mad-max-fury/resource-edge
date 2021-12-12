import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./reset.css"
const Reset = () => {
  const [IsContinueReset, setIsContinueReset] = useState(true)
  const [IsSuccessFul, setIsSuccessFul] = useState(false)
  const [Email, setEmail] = useState(null)
  const [ResetPassWord, setResetPassWord] = useState(null)
  const [ConfirmResetpassword, setConfirmResetpassword] = useState(null)

  const handleFormSubmitReset = (e) => {
    console.log(e.target.children)
    e.preventDefault()
    if (Email !== null) {
      const password = document.getElementById("resetPasword")
      const cpassword = document.getElementById("confirmResetPasword")
      setResetPassWord(password.value)
      setConfirmResetpassword(cpassword.value)

      setIsSuccessFul(true)
    } else {
      const email = document.getElementById("resetEmail")
      setEmail(email.value)
      setIsContinueReset(false)
      email.value = ""
    }
  }
  // useEffect(() => {
  //   window.addEventListener('DOMContentLoaded', () => {
  //     window.addEventListener('keyup', (e) => {
  //       if (e.keyCode === 13) {

  //        console.log()
  //         // console.log("called")
  //         // handleFormSubmitReset();
  //       } else {
  //         return;
  //       }
  //     })
  //   })
  // }, [])
  console.log(true, ResetPassWord, ConfirmResetpassword, Email)

  return (
    <main className='reset'>
      <img src='images/authLogo.svg' />
      <form onSubmit={handleFormSubmitReset}>
        <header>
          <img src="images/Alogo.svg" />
        </header>
        <main style={IsContinueReset ? null : { height: "fit-content", padding: "2rem 0" }}>
          {
            IsSuccessFul ?
              <>
                <div>
                  <h3>Reset Password</h3>
                </div>
                <div>
                  <div style={myStyles5}>
                    <img src='images/check-circle-outline.svg' style={myStyles4} />
                  </div>
                  <p>A recovery email has been sent to your email address. </p>
                </div>
              </>
              : <>
                <div>
                  <h3>Reset Password</h3>
                  {IsContinueReset ? <p>To enable us reset your password, enter your email below</p> : <p>The password should have atleast 6 characters</p>}
                </div>
                <div>
                  {
                    IsContinueReset ? <>
                      <h3>Email Address</h3>
                      <div>
                        <input type="email" id='resetEmail' placeholder='Enter email' />
                        <div className='empty-to-fill'></div>
                      </div>
                      {/* <span>✔</span> */}
                    </>
                      : <>
                        <h3>Password</h3>
                        <div>
                          <input type="password" id="resetPasword" placeholder='Enter password' />

                        </div>
                        {/* <img id="pa" src='images/watch.svg' /> */}
                        <h3>Confirm Password</h3>
                        <div>
                          <input type="password" id='confirmResetPasword' placeholder='Confirm Password' />
                          <div className='empty-to-fill' style={{ background: "#0052CC" }}></div>
                        </div>
                        {/* <img id="cp" src='images/watch.svg' /> */}
                      </>
                  }
                </div>
              </>
          }
          <div style={IsSuccessFul ? myStyles : null}>
            <div style={IsSuccessFul ? myStyles2 : null}></div>
            <Link to={'/login'} style={IsSuccessFul ? myStyles3 : null}>Back to login</Link>
          </div>

        </main>

      </form>
    </main>
  )
}

export default Reset


const myStyles = {
  width: "80%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem!important",
}
const myStyles2 = {
  border: "1px solid #dfe1e6",
  width: "100% !important",
}

const myStyles3 = {
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "20px",
  textDecoration: "none",
  color: "#0052cc",
}
const myStyles4 = {
  height: "8rem",
  width: "12rem",
  margin: "0 auto"
}
const myStyles5 = {
  height: "fit-content",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}