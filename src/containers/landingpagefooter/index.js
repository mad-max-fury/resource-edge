import React from 'react'
import "./landingpagefooter.css"
const Footer = () => {
  return (
    <footer className='footer'>
      <aside>
        <img src="images/logoF.svg" />
        <p>Throw paperwork into the trash</p>
      </aside>
      <aside>
        <span>
          <img src='images/facebook.svg' />
          <img src='images/twitter.svg' />
          <img src='images/linkedin.svg' />
          <img src='images/vector3.svg' />

        </span>
        <p>Copyright © Genesys DevStudio . All rights reserved</p>
      </aside>

    </footer>
  )
}

export default Footer
