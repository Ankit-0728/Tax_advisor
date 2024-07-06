// import React from 'react'
// import Header from './header/Header'
// import Footer from './footer/Footer'

//     const BusinessTax=()=> {
//   return (
//    <>
//    <Header />
//     <div className="container">
//                 <header className="header">
//                     <h3>Business Tax Services</h3>
//                 </header>
//                 <section className="content">
//                     <h4>Comprehensive Tax Solutions for Your Business</h4>
//                     <p style={{textAlign:'justify'}}>Our Business Tax Services are designed to help your company comply with tax regulations and minimize tax liabilities. We provide a comprehensive range of services to meet your business's needs:</p>
//                     <ul>
//                         <li style={{textAlign:'justify'}}>
//                             <strong>Tax Compliance:</strong>
//                             <ul>
//                                 <li>We handle the preparation and filing of federal, state, and local tax returns.</li>
//                                 <li>Ensure your business adheres to all regulatory requirements.</li>
//                             </ul>
//                         </li>
//                         <li style={{textAlign:'justify'}}>
//                             <strong>Tax Planning and Strategy:</strong>
//                             <ul>
//                                 <li>Develop effective tax strategies to reduce tax liabilities.</li>
//                                 <li>Provide advice on the tax implications of business decisions and transactions.</li>
//                             </ul>
//                         </li>
//                         <li style={{textAlign:'justify'}}>
//                             <strong>Audit Representation:</strong>
//                             <ul>
//                                 <li>Represent your business during audits.</li>
//                                 <li>Manage communications and negotiations with tax authorities.</li>
//                             </ul>
//                         </li>
//                         <li style={{textAlign:'justify'}}>
//                             <strong>Sales and Use Tax Services:</strong>
//                             <ul>
//                                 <li>Assist with compliance for sales and use taxes.</li>
//                                 <li>Ensure accurate collection and remittance of sales taxes.</li>
//                             </ul>
//                         </li>
//                         <li style={{textAlign:'justify'}}>
//                             <strong>Tax Credits and Incentives:</strong>
//                             <ul>
//                                 <li>Identify and maximize eligible tax credits and incentives.</li>
//                                 <li>Guide you through the eligibility and application processes.</li>
//                             </ul>
//                         </li>
//                         <li style={{textAlign:'justify'}}>
//                             <strong>International Taxation:</strong>
//                             <ul>
//                                 <li>Provide assistance with international tax compliance.</li>
//                                 <li>Advise on cross-border transactions and transfer pricing.</li>
//                             </ul>
//                         </li>
//                     </ul>
//                     <p style={{textAlign:'justify'}}>By leveraging our Business Tax Services, your company can ensure compliance, optimize tax liabilities, and make well-informed financial decisions to support growth and stability.</p>
//                 </section>
//             </div>
// <Footer />
//    </>
//   )
// }

// export default BusinessTax


import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import tax_image from './images/tax_image.jpg'

const BusinessTax = () => {
  return (
    <>
      <Header />
      <div className="container">
        <header className="header">
          <br/><br/><br/><br/><br/><br/>
          <center>
            <h3>Business Tax Services</h3>
          </center>
        </header>
        <section className="content">
          <h4>Comprehensive Tax Solutions for Your Business</h4>
          <p style={{textAlign: 'justify'}}>
            Our Business Tax Services are designed to help your company comply with tax regulations and minimize tax liabilities. We provide a comprehensive range of services to meet your business's needs:
          </p>
          <div style={{display: 'flex'}}>
            <div style={{flex: 2}}>
              <ul>
                <li style={{textAlign: 'justify'}}>
                  <strong>Tax Compliance:</strong>
                  <ul>
                    <li>We handle the preparation and filing of federal, state, and local tax returns.</li>
                    <li>Ensure your business adheres to all regulatory requirements.</li>
                  </ul>
                </li>
                <li style={{textAlign: 'justify'}}>
                  <strong>Tax Planning and Strategy:</strong>
                  <ul>
                    <li>Develop effective tax strategies to reduce tax liabilities.</li>
                    <li>Provide advice on the tax implications of business decisions and transactions.</li>
                  </ul>
                </li>
                <li style={{textAlign: 'justify'}}>
                  <strong>Audit Representation:</strong>
                  <ul>
                    <li>Represent your business during audits.</li>
                    <li>Manage communications and negotiations with tax authorities.</li>
                  </ul>
                </li>
                <li style={{textAlign: 'justify'}}>
                  <strong>Sales and Use Tax Services:</strong>
                  <ul>
                    <li>Assist with compliance for sales and use taxes.</li>
                    <li>Ensure accurate collection and remittance of sales taxes.</li>
                  </ul>
                </li>
                <li style={{textAlign: 'justify'}}>
                  <strong>Tax Credits and Incentives:</strong>
                  <ul>
                    <li>Identify and maximize eligible tax credits and incentives.</li>
                    <li>Guide you through the eligibility and application processes.</li>
                  </ul>
                </li>
                <li style={{textAlign: 'justify'}}>
                  <strong>International Taxation:</strong>
                  <ul>
                    <li>Provide assistance with international tax compliance.</li>
                    <li>Advise on cross-border transactions and transfer pricing.</li>
                  </ul>
                </li>
              </ul>
              <p style={{textAlign: 'justify'}}>
                By leveraging our Business Tax Services, your company can ensure compliance, optimize tax liabilities, and make well-informed financial decisions to support growth and stability.
              </p>
            </div>
            <div style={{flex: 1, marginLeft: '20px', marginTop: '15px'}}>
              <img 
                src={tax_image} 
                alt="Business Tax Services" 
                style={{width: '450px', height: '300px'}}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default BusinessTax