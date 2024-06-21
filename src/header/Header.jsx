import React from 'react'
import logo from '../images/fintaxxLogo.png'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Header=()=> {
  return (
    <>
 <header
        id="site-header"
        className="site-header mobile-header-blue header-style-1" style={{position:'fixed', width:'100%'}}
      >
     
        
          {/* <div className="main-header-bottom"> */}
            {/* <div className="container"> */}
             
                {/* <div className="col-md-12" style={{marginTop: "12px"}}> */}
                  <div className="header-mainnav">
                  
                    <div id="site-navigation" className="main-navigation fleft">
                   
                  
                      
                      <ul id="primary-menu" className="menu">
                      <Link to="/">
                    <img
                          className="logo-static"
                          src={logo}
                          alt="Consultax"
                          style={{maxWidth: "10%",
                            float: "inline-start"
                          }}
                        />
                        </Link>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li className="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1731">
                          <Link to="#">About Us</Link>
                          <ul className="sub-menu">
                          <li className="menu-item-1745">
                              <Link to="/about_s">About</Link>
                            </li>
                            <li className="menu-item-1738">
                              <Link to="/about">Our Values</Link>
                            </li>
                            
                            <li className="menu-item-1742">
                              <Link to="#">Blog</Link>
                            </li>
                            <li className="menu-item-1746">
                              <Link to="/clientReview">Reviews</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="#">Services</Link>
                          <ul className="sub-menu">
                          <li>
                              <Link>Tax Preparation</Link>
                              <ul
                                className="sub-menu"
                                style={{ position: "absolute", left: 261 }}
                              >
                                <li className="menu-item-1791">
                                  <Link to="/financial">
                                  Individual Tax Services
                                  </Link>
                                </li>
                                <li className="menu-item-1758">
                                  <Link to="/businessTax">
                                  Business Tax Services
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/payroll">Payroll Services</Link>
                            </li>
                            <li>
                              <Link to="/cfoServices">ITIN Services</Link>
                            </li>
                            <li>
                              <Link to="/incorpServices">Incorporation Services</Link>
                            </li>
                            <li>
                              <Link to="/book_account">Accounting and Bookkeeping</Link>
                            </li>

                          </ul>
                        </li>
                        <li>
                          <Link to="/contactUs">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/career">Career</Link>
                        </li>
                        <li>
                          <Link to="https://sa.www4.irs.gov/wmr/">Check Your Refund</Link>
                        </li>
                        <li>
      <span style={{color:'white',marginLeft:'40px'}} >
        <FaPhoneAlt style={{marginRight: '8px'}} />
        <FaWhatsapp style={{marginRight: '8px'}} />
        <strong className="font-size18" style={{color:'rgb(226,193,0)'}}>
          +1 571.389.1304
        </strong>
      </span>{" "} <br />
      <span style={{color:'white',marginLeft:'40px'}}>
        <FaEnvelope style={{marginRight: '8px'}} />
        <strong className="font-size18" style={{color:'rgb(226,193,0)'}}>
          info.finntaxs@gmail.com
        </strong>
      </span>{" "}
    </li>
              
                        {/* <li 
                        // style={{marginLeft: '-2px'}}
                         >
                          <span style={{color:'white'}} >
                            Call/Whatsapp:{" "}
                            <strong className="font-size18" style={{color:'rgb(226,193,0)'}}>
                              +1 571.389.1304
                            </strong>
                          </span>{" "} <br />
                          <span style={{color:'white'}}>
                            Email:{" "}
                            <strong className="font-size18" style={{color:'rgb(226,193,0)'}}>
                              info.finntaxs@gmail.com
                            </strong>
                          </span>{" "}
                        </li> */}
                      
                      </ul>
                    </div>
                    {/* #site-navigation */}
                  </div>
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
        
          
       
        {/* Main header close */}
        <div className="header_mobile">
          <div className="mlogo_wrapper clearfix">
            <div className="mobile_logo">
              <Link to="#">
                <img src="images/logo-white.svg" alt="Consultax" />
              </Link>
            </div>
            <div id="mmenu_toggle">
              <button />
            </div>
          </div>
         
        </div>
      </header>

    </>
  )
}

export default Header;