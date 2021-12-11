import React from 'react'
import SectionHeading from '../../components/sectionheading'
import InfoWrapper from '../../components/shortMessage'
import "./adminLogistics.css"
const AdminLogisticContainer = () => {
  return (
    <section className='adminLogSec'>
      <div>
        <div>
          <SectionHeading SecHeading={"Admin & Logistics"} SecContent={"Manage and track company assets as well as logistics for travelling employees"} />
          <InfoWrapper InfoHeading={"Travel & Logistics"} imgSrc={"images/travel.svg"} InfoContent={"Make travel requests, get approvals, and have access to travel information."} />
          <InfoWrapper InfoHeading={"Asset Management"} imgSrc={"images/case.svg"} InfoContent={"Manage the acquisition, assignment, and disposition of assets seamlessly."} />
        </div>
        <div>
          <img src='images/tl.png' />
        </div>
      </div>
      <div>
        <div>
          <SectionHeading SecHeading={"Finance"} SecContent={"Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies"} />
          <InfoWrapper InfoHeading={"RE Vouchers"} imgSrc={"images/rev.svg"} InfoContent={"Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers."} />
          <InfoWrapper InfoHeading={"Payroll"} imgSrc={"images/payroll.svg"} InfoContent={"Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes."} />
        </div>
        <div>
          <img src='images/finan.svg' />
        </div>
      </div>
      <div className='partner'>
        <div>
          <img src="images/image 7.svg" />
        </div>
        <div>
          <img src="images/image 6.svg" />
        </div>
        <div>
          <img src="images/image 9.svg" />
        </div>
        <div>
          <img src="images/image 10.svg" />
        </div>

      </div>
    </section>
  )
}

export default AdminLogisticContainer
