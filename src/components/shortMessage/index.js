import React from 'react'
import "./shortMessage.css"
const InfoWrapper = ({ imgSrc, InfoHeading, InfoContent }) => {
  return (
    <div className='info'>
      <img src={imgSrc} />
      <h1>{InfoHeading}</h1>
      <p>{InfoContent}</p>
    </div>
  )
}

export default InfoWrapper
