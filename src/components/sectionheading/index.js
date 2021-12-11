import React from 'react'
import "./sectionheading.css"
const SectionHeading = ({ SecHeading, SecContent }) => {
  return (
    <div className='Sechead'>
      <h1>{SecHeading}</h1>
      <p>{SecContent}</p>
    </div>
  )
}

export default SectionHeading
