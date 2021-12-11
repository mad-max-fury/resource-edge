import React from 'react'
import DashWidget from '../../components/dashWidget'
import "./dashboardcontent.css"
const DashBoardContent = () => {
  return (
    <div className="DashBoardContent-wrapper">
      <div className="DashBoardContent-wrapper-inner">
        <div>
          <h1>Hello, Ositadinma Nwangwu</h1>
          <span>Welcome and good to have you back.</span>
        </div>
        <div>
          <h1>Things to do</h1>
          <DashWidget text="Upload your employee performance agreement" typeBtn={false} />
          <DashWidget text="Start quarterly self review" typeBtn={true} />
        </div>
      </div>
    </div>
  )
}

export default DashBoardContent
