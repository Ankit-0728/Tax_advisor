import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import './assets/contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs=()=> {
  return (
    <>
    <Header />
    <div className="contain">
  <div className="row p-5">  
    <div className="col-md-5 myForm" style={{marginTop:'100px',maxHeight: "675px"}}> 
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
        <button type="submit" className="button" style={{marginTop:'100px',marginLeft:'165px'}}>
          SEND MESSAGE
        </button>
      </form>
    </div>
    <div className="col-md-6" style={{textAlign:'justify',marginTop:'100px',marginLeft:'50px'}}>
   
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
        <i className="contact-info-icon fas fa-map-marker-alt fa-2x" style={{ fontSize: "xx-large",marginTop:'-205px'}} />
        <div className="contact-info-text">
          <h3>Location Address</h3>
          
          <h5>USA :</h5>
          <p>6518 Lee Valley Drive, Apt #201 Springfield, Virginia 22150.</p>
          <h5>DELHI (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>92, LGF, Defence Enclave, Delhi 110092.</p>
          <h5>INDORE (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>215, Shagun Arcade, Vijay Nagar, Indore 452010.</p>
        </div>
      </div>
      <div className="contact-info">
        <i className="contact-info-icon fas fa-phone-alt"style={{ fontSize: "xx-large",marginTop:'-205px'}} />
        <div className="contact-info-text">
          <h3>Phone Numbers</h3>
          <h5>USA :</h5>
          <p style={{textAlign:'justify'}}>+1 571.389.1304</p>
          <h5> DELHI (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>+91 981.129.6710</p>
          <h5> INDORE (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>+91 903.909.5390</p>
        </div>
      </div>
      <div className="contact-info">
        <i className="contact-info-icon fas fa-envelope"style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <h3>Email Address</h3>
          <p style={{textAlign:'justify'}}>info.finntaxs@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
    </>
  )
}

export default ContactUs