import React from 'react'
import "./dashWidget.css"
const DashWidget = ({ text, typeBtn }) => {
  return (
    <div className="dasWigdgetWrapper">
      <div>
        <div></div>
        <div>
          <p>{text}</p>
        </div>
      </div>
      <div>
        {
          typeBtn ? <button style={BtnStyles}>Resume</button> : <span style={{ color: `#0052CC`, fontSize: "20px" }}>Begin</span>
        }
      </div>
    </div>
  )
}

export default DashWidget

const BtnStyles = { width: "fit-content", padding: ".4rem 1rem", background: "rgba(9, 30, 66, 0.04)", border: "none", borderRadius: "4px", cursor: "pointer" }