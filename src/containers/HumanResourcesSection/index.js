import React from 'react'
import SectionHeading from '../../components/sectionheading'
import InfoWrapper from '../../components/shortMessage'
import "./humanResource.css"
const HumanRS = () => {
  return (
    <>
      <section className='HumanRs'>
        <div>
          <div>
            <SectionHeading SecHeading={"Human Resources"} SecContent={"Onboard new employees, manage the employee lifecycle and measure employee performance."} />
          </div>
          <div>
            <InfoWrapper InfoContent={"From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team."} InfoHeading={"Employee Management"} imgSrc={"images/hr1.svg"} />
            <InfoWrapper InfoContent={"Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews. "} InfoHeading={"Performance Management"} imgSrc={"images/hr2.svg"} />
            <InfoWrapper InfoContent={"Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance."} InfoHeading={"Paid time off"} imgSrc={"images/hr3.svg"} />

          </div>
          <div>
            <img src='images/dashpic.svg' />
          </div>
        </div>

      </section>
    </>
  )
}

export default HumanRS
