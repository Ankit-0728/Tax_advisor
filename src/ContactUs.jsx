import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import './assets/contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import cont_img from '../src/images/4.jpg'

const ContactUs=()=> {
  return (
    <>
    <Header />
    
    <div className="contain">
  <div className="row p-5">  
    <div className="col-md-5" > 
    <h4 style={{marginTop: "104px", fontSize:'25px'}}>Feel Free To Contact And Reach Us For More Info !</h4>
      <p style={{textAlign:'justify', fontSize:'18px'}}>
        We recognize that every business has distinct needs for professional
        services. Thank you for considering us.
      </p>
      <p style={{textAlign:'justify', fontSize:'18px'}} >
        Our team is available for in-person consultations and on-call meetings
        to address your questions whenever necessary.
      </p>
      <form className="myForm"  style={{marginTop:'20px',height: "536px"}}>
      <h2 className='myCont'>Contact Us</h2>
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
        <center>
        <button type="submit" className="button" style={{marginTop:"2px"}}>
          SEND MESSAGE
        </button>
        </center>
      </form>
    </div>
    <div className="col-md-6" style={{textAlign:'justify',marginTop:'100px',marginLeft:'50px'}}>
      <div className="contact-info">
        <i className="contact-info-icon fas fa-map-marker-alt fa-2x" style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <div>
          <h3>Location Address</h3>
          
          <h5 style={{fontSize:'18px'}}>USA :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>6518 Lee Valley Drive, Apt # 201 Springfield, Virginia 22150.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}><i className="fas fa-phone-alt fa-2x" style={{ fontSize: "larger"}} /> +1 571.389.1304</p>
          </div>
          <div>          
          <h5 style={{fontSize:'18px',marginTop:'50px'}}>INDIA </h5>
          </div>
          <div>
          <h5>Delhi :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>92, LGF, Defence Enclave, Delhi 110092.</p>
          <p style={{textAlign:'justify'}}><i className="fas fa-phone-alt fa-2x" style={{ fontSize: "larger"}} /> +91 981.129.6710</p>
          </div>
          <div>
          <h5>Kolkata :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>25, Black Burn Lane, Kolkata 700012.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <i className="fas fa-phone-alt fa-2x" style={{ fontSize: "larger"}} /> +91 933.938.0016</p>
          </div>
          <div>
          <h5>Indore :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>215, Shagun Arcade, Vijay Nagar, Indore 452010.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <i className="fas fa-phone-alt fa-2x" style={{ fontSize: "larger"}} /> +91 903.909.5390</p>
          </div>
          <div>
          <h5>Bengaluru :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>2nd Floor, 17, Bhagyalaxmi Square, Sector-3, Bengaluru 560102</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <i className="fas fa-phone-alt fa-2x" style={{ fontSize: "larger"}} /> +91 987.119.9257</p>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <i className="contact-info-icon fas fa-envelope"style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <h3>Email Address</h3>
          <p style={{textAlign:'justify',fontSize:'18px'}}>info.finntaxs@gmail.com</p>
        </div>
      </div>
    </div>
    {/* <div className="col-md-6" style={{textAlign:'justify',marginTop:'100px',marginLeft:'50px'}}>
    <div className="contact-info">
        <i className="contact-info-icon fas fa-map-marker-alt fa-2x" style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <h3>Location Address</h3>
          
          <h5 style={{fontSize:'18px'}}>USA :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>6518 Lee Valley Drive, Apt # 201 Springfield, Virginia 22150.</p>
          
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <i className="contact-info-icon fas fa-phone"  /> +1 571.389.1304</p>
          <br/>
          <h5 style={{fontSize:'18px'}}>INDIA </h5>
          <h5>Delhi :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>92, LGF, Defence Enclave, Delhi 110092.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}><img width="30" height="30" src="https://img.icons8.com/color/48/apple-phone.png" alt="apple-phone"/> +91 981.129.6710</p>
          <h5>Kolkata :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>25, Black Burn Lane, Kolkata 700012.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <img width="30" height="30" src="https://img.icons8.com/color/48/apple-phone.png" alt="apple-phone"/> +91 933.938.0016</p>
          <h5>Indore :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>215, Shagun Arcade, Vijay Nagar, Indore 452010.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <img width="30" height="30" src="https://img.icons8.com/color/48/apple-phone.png" alt="apple-phone"/> +91 903.909.5390</p>
          <h5>Bengaluru :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>2nd Floor, 17, Bhagyalaxmi Square, Sector-3, Bengaluru 560102</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <img width="30" height="30" src="https://img.icons8.com/color/48/apple-phone.png" alt="apple-phone"/> +91 987.119.9257</p>
        </div>
      </div>
    {/* <div className="contact-info">
        <i className="contact-info-icon fas fa-map-marker-alt fa-2x" style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <h3>Location Address</h3>
          
          <h5 style={{fontSize:'18px'}}>USA :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>6518 Lee Valley Drive, Apt # 201 Springfield, Virginia 22150.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <span>Phone :</span> +1 571.389.1304</p>
          <br/>
          <h5 style={{fontSize:'18px'}}>INDIA </h5>
          <h5>Delhi :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>92, LGF, Defence Enclave, Delhi 110092.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <span>Phone:</span> +91 981.129.6710</p>
          <h5>Kolkata :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>25, Black Burn Lane, Kolkata 700012.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <span>Phone:</span> +91 933.938.0016</p>
          <h5>Indore :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>215, Shagun Arcade, Vijay Nagar, Indore 452010.</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <span>Phone:</span> +91 903.909.5390</p>
          <h5>Bengaluru :</h5>
          <p style={{textAlign:'justify',lineHeight:'0px'}}>2nd Floor, 17, Bhagyalaxmi Square, Sector-3, Bengaluru 560102</p>
          <p style={{textAlign:'justify',lineHeight:'5px'}}> <span>Phone:</span> +91 987.119.9257</p>
        </div>
      </div> */}
      {/* <div className="contact-info">
        <i className="contact-info-icon fas fa-map-marker-alt fa-2x" style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <h3>Location Address</h3>
          
          <h5>USA :</h5>
          <p style={{textAlign:'justify'}}>6518 Lee Valley Drive, Apt #201 Springfield, Virginia 22150.</p>
          <p style={{textAlign:'justify'}}> <span>Ph.</span> +1 571.389.1304</p>
          <h5>DELHI (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>92, LGF, Defence Enclave, Delhi 110092.</p>
          <p style={{textAlign:'justify'}}> <span>Ph.</span> +91 981.129.6710</p>
          <h5>KOLKATA (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>25, Black Burn Lane, Kolkata 700012.</p>
          <p style={{textAlign:'justify'}}> <span>Ph.</span> +91 933.938.0016</p>
          <h5>INDORE (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>215, Shagun Arcade, Vijay Nagar, Indore 452010.</p>
          <p style={{textAlign:'justify'}}> <span>Ph.</span> +91 903.909.5390</p>
          <h5>BENGALURU (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>2nd Floor, 17, Bhagyalaxmi Square, Sector-3, HSR Layout, Bengaluru 560102</p>
          <p style={{textAlign:'justify'}}> <span>Ph.</span> +91 987.119.9257</p>
        </div>
      </div> */}
      {/* <div className="contact-info">
      
        <div className="contact-info-text">
        <i className="contact-info-icon fas fa-phone-alt"style={{ fontSize: "xx-large",marginTop:'-375px'}} />
          <h3>Phone Numbers</h3>
          <h5>USA :</h5>
          <p style={{textAlign:'justify'}}>+1 571.389.1304</p>
          <h5> DELHI (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>+91 981.129.6710</p>
          <h5> KOLKATA (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>+91 933.938.0016</p>
          <h5> INDORE (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>+91 903.909.5390</p>
          <h5> BENGALURU (INDIA) :</h5>
          <p style={{textAlign:'justify'}}>+91 987.119.9257</p>
        </div>
      </div> */}
      {/* <div className="contact-info">
        <i className="contact-info-icon fas fa-envelope"style={{ fontSize: "xx-large"}} />
        <div className="contact-info-text">
          <h3>Email Address</h3>
          <p style={{textAlign:'justify',fontSize:'18px'}}>info.finntaxs@gmail.com</p>
        </div>
      </div> */}
    </div>
  {/* </div> */}
</div>
<Footer />
    </>
  )
}

export default ContactUs


