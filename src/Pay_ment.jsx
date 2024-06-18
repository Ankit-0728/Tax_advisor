import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import './assets/contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Payment=()=> {
    const plans = [
        {
          title: 'Starter',
          price: '$130',
          description: 'Designed for Freelancers, Sole-Proprietors, and Small Businesses with annual Reporting and Advisory to Founders',
          features: [
            'Corporate Tax Filing',
            'HST/GST Filing',
            'Payroll Processing',
            'Dividend Processing',
            'Annual Account Check',
            'Annual Profit & Loss and Balance Sheet',
            'Annual Performance Analysis and Management Reporting',
            'Paper Free Bookkeeping',
            'QuickBooks Online (QBO) Set up',
            'Annual Return filing with Corporations Canada',
            'Training & Support',
            'Email, Text, WhatsApp and Phone Support',
            'Annual legal agreement'
            
          ]
        },
        {
          title: 'Professional',
          price: '$450',
          description: 'Designed for Small & Medium Enterprises with Monthly/Quarterly Reporting and Advisory to Founders',
          features: [
            'Corporate Tax Filing',
            'HST/GST Filing',
            'Payroll Processing',
            'Dividend Processing',
            'Quarterly and Annual Account Check',
            'Quarterly Profit & Loss and Balance Sheet',
            'Quarterly Performance Analysis and Management Reporting',
            'Paper Free Bookkeeping',
            'QuickBooks Online (QBO) Set up',
            'Annual Return filing with Corporations Canada',
            'Training & Support',
            'Email, Text, WhatsApp and Phone Support',
            'Add On Services'
          ]
        },
        {
          title: 'Enterprise',
          price: '$1000',
          description: 'Designed for Medium Enterprises with Monthly Reporting and Advanced Insights',
          features: [
            'Corporate Tax Filing',
            'HST/GST Filing',
            'Payroll Processing',
            'Dividend Processing',
            'Quarterly and Annual Account Check',
            'Quarterly Profit & Loss and Balance Sheet',
            'Quarterly Performance Analysis and Management Reporting',
            'Paper Free Bookkeeping',
            'QuickBooks Online (QBO) Set up',
            'Annual Return filing with Corporations Canada',
            'Business Planning and Advisory',
            'Training & Support',
            'Email, Text, WhatsApp and Phone Support',
            'Add On Services'
          ]
        }
      ];
  return (
    <>
    <Header />

    {/* <div className="pricing-table">
      <h2 style={{marginTop: '30px'}}>Our Composite Approach for Pricing</h2>
      <p>Below are our fees packages for Corporate Tax, Bookkeeping, Accounting and Related Advisory Services</p>
      <div className="plans">
        {plans.map((plan, index) => (
          <div className="plan" key={index}>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price} <span>/ Monthly</span></p>
            <p className="description">{plan.description}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button>CHOOSE PLAN</button>
          </div>
        ))}
      </div>
    </div>
    <div className="contain">
  <div className="row p-5">  
    <div className="col-md-6 myForm"> 
    <h2 className='myCont'>Contact Us</h2>
      <form>
        <input type="text" className="input-field" placeholder="Your Name.." />
        <input
          type="email"
          className="input-field"
          placeholder="Your Email.."
        />
        <input type="tel" className="input-field" placeholder="Phone No.." />
        <textarea
          className="input-field"
          placeholder="Enter Your Message.."
          defaultValue={""}
        />
        <button type="submit" className="button">
          SEND MESSAGE
        </button>
      </form>
    </div>
    <div className="col-md-6" style={{textAlign:'justify'}}>
   
      <h4>Feel Free To Contact And Reach Us For More Info !</h4>
      <p style={{textAlign:'justify'}}>
        We recognize that every business has distinct needs for professional
        services. Thank you for considering us.
      </p>
      <p style={{textAlign:'justify'}} >
        Our team is available for in-person consultations and on-call meetings
        to address your questions whenever necessary.
      </p>
      <div className="contact-info">
        <i className="contact-info-icon fas fa-map-marker-alt fa-2x" style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <h3>Location Address :</h3>
          <p>6518 Lee Valley Drive, APT 201 Springfield, Virginia 22150, USA</p>
        </div>
      </div>
      <div className="contact-info">
        <i className="contact-info-icon fas fa-phone-alt"style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <h3>Phone Numbers :</h3>
          <p style={{textAlign:'justify'}}>+1 437-292-4433</p>
        </div>
      </div>
      <div className="contact-info">
        <i className="contact-info-icon fas fa-envelope"style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <h3>Email Address:</h3>
          <p style={{textAlign:'justify'}}>info@yourwebsite.com</p>
        </div>
      </div>
    </div>
  </div>
</div> */}


<div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="section-head ">
                        <h2 className="section-title linear_color">Employment Opportunities</h2>
                      </div>
                      <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                          <div style={{display:'flex'}}>
                          <div  >
                          <p style={{textAlign:'justify'}}>
                            FINNTAX SOLUTIONS LLC, is seeking professional, hard-working, licensed CPAs with at least four years of experience.
                          </p>
                          <p style={{textAlign:'justify',paddingRight: '52px'}}>
                            The Firm demands independence, integrity, objectivity, competence and due care from all of its personnel in the conduct of its engagements. Our Firm is structured to provide leadership in achieving high quality professional performance while maintaining the concept of individual responsibility. Policies and procedures have been established providing assurance that professional engagements are properly planned and executed. Decisions are based on the substance of issues, not on form.
                          </p>
                          </div>

                          <div style={{ float: 'left' }}>
                            <p style={{textAlign:'justify',
    borderRadius: '5px',
    width: '290px',
    padding: '12px',
    margin: '10px'
    }}>   
                            <u style={{
                              color: "green",
                              textDecorationColor: "yellow",
                              fontSize: "large",
                            }}>Please mail resume to:</u>  
                              <br/>
                              Email: info.finntaxs@gmail.com
                              <br />
                              6518 Lee Valley Drive
                              <br />
                              Apt 201 Springfield
                              <br />
                              Virginia 22150 USA
                            </p>
                          </div>
                          </div>
                          
                          <div>
                          <p style={{textAlign:'justify',paddingRight: '360px'}}>
                            Our policies and procedures designate Partners of the Firm for consultation on significant ethical, technical and industry questions. The policies and procedures are designed to assure that clients receive the best professional services we can provide. We continually keep in mind the public interest. We expect our Partners and Associates to identify and resolve all important engagement issues.
                          </p>
                          <p style={{textAlign:'justify',paddingRight: '360px'}}>
                            The job requires high level tax preparation skills, superior tax research and problem solving abilities, broad software knowledge, and excellent written and oral communication skills. We have a team approach to provide high quality client service for tax compliance, planning, financial statements, and general business consulting.
                          </p>
                          <p style={{textAlign:'justify',paddingRight: '360px'}}>
                            Check this page from time to time for specific employment opportunities for Certified Public Accountants, small business accountants and administrative staff.
                          </p>
                          </div>
                         
                          <div className="empty_space_30" />
                        </div>
                      </div>
                    </div>
                  </div>


<Footer />
    </>
  )
}

export default Payment;