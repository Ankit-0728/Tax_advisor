import React from 'react'
import logo from '../images/fintaxxLogo.png'
import { Link } from 'react-router-dom'

const Header=()=> {
  return (
    <div>
 <header
        id="site-header"
        className="site-header mobile-header-blue header-style-1" style={{position:'fixed', width:'100%'}}
      >
        <Link to="/">
                    <img
                          className="logo-static"
                          src={logo}
                          alt="Consultax"
                          style={{maxWidth: "8%",
                            float: "inline-start"}}
                        />
                        </Link>
        <div className="main-header md-hidden sm-hidden">
          <div className="main-header-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12" style={{marginTop: "12px"}}>
                  <div className="header-mainnav">
                  
                    <div id="site-navigation" className="main-navigation fleft">
                      
                      <ul id="primary-menu" className="menu">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li className="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1731">
                          <Link to="#">About</Link>
                          <ul className="sub-menu">
                            <li className="menu-item-1738">
                              <Link to="/about">Our Values</Link>
                            </li>
                            <li className="menu-item-1745">
                              <Link to="/employment">Employment Opportunities</Link>
                            </li>
                            <li className="menu-item-1742">
                              <Link to="#">Blog</Link>
                            </li>
                            <li className="menu-item-1746">
                              <Link to="/clientReview">Reviews</Link>
                            </li>
                            {/* <li class="menu-item-1757"><Link to="services.html">Services Box</Link></li>
                                                <li class="menu-item-1744"><Link to="services-icon.html">Icon Box</Link></li>
                                                <li class="menu-item-1740"><Link to="career.html">Career</Link></li> */}
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
                                {/* <li className="menu-item-1790">
                                  <Link to="/ePlanning">
                                    Estate Planning
                                  </Link>
                                </li> */}
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
                        {/* <li className="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1789">
                          <Link to="services.html">Services</Link>
                          <ul className="sub-menu">
                            <li className="menu-item-1791">
                              <Linkto                             Services For Individuals
                              </Link>
                              <ul
                                className="sub-menu"
                                style={{ position: "absolute", left: 261 }}
                              >
                                <li className="menu-item-1791">
                                  <Link to="/financial">
                                    Personal Financial Planning
                                  </Link>
                                </li>
                                <li className="menu-item-1758">
                                  <Link to="/retPlanning">
                                    Retirement Planning
                                  </Link>
                                </li>
                                <li className="menu-item-1790">
                                  <Link to="/ePlanning">
                                    Estate Planning
                                  </Link>
                                </li>
                                <li className="menu-item-1760">
                                  <Link to="/elderCare">Elder Care</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-1758">
                              <Link toiness Services</Link>
                              <ul
                                className="sub-menu"
                                style={{ position: "absolute", left: 261 }}
                              >
                                <li className="menu-item-1791">
                                  <Link to="/busAccount">
                                    Small Business Accounting
                                  </Link>
                                </li>
                                <li className="menu-item-1758">
                                  <Link to="/payroll">Pyroll</Link>
                                </li>
                                <li className="menu-item-1790">
                                  <Link to="service-detail.html">
                                    Part Time CFO Services
                                  </Link>
                                </li>
                                <li className="menu-item-1760">
                                  <Link to="service-detail.html">
                                    Audits-Reviews-Compilations
                                  </Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">
                                    Forensic Accounting
                                  </Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">
                                    Cash Floe Management
                                  </Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">Bank Financing</Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">
                                    Business Valuation
                                  </Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">
                                    Strategic Business Planning
                                  </Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">
                                    Succession Planning
                                  </Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">
                                    New Business Formation
                                  </Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">
                                    Non-Profit Organisations
                                  </Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">
                                    Internal Controls
                                  </Link>
                                </li>
                                <li className="menu-item-1761">
                                  <Link to="service-detail.html">
                                    Litigation Support
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-1790">
                              <Link to="service-detail.html">Tax Services</Link>
                              <ul
                                className="sub-menu"
                                style={{ position: "absolute", left: 261 }}
                              >
                                <li className="menu-item-1791">
                                  <Link to="service-detail.html">
                                    Tax Preparations
                                  </Link>
                                </li>
                                <li className="menu-item-1758">
                                  <Link to="service-detail.html">Tax Planning</Link>
                                </li>
                                <li className="menu-item-1790">
                                  <Link to="service-detail.html">Tax Problems</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-1760">
                              <Link to="service-detail.html">
                                Quick Books Services
                              </Link>
                              <ul
                                className="sub-menu"
                                style={{ position: "absolute", left: 261 }}
                              >
                                <li className="menu-item-1791">
                                  <Link to="service-detail.html">Why QuickBooks</Link>
                                </li>
                                <li className="menu-item-1758">
                                  <Link to="service-detail.html">
                                    QuickBooks Setup
                                  </Link>
                                </li>
                                <li className="menu-item-1790">
                                  <Link to="service-detail.html">
                                    QuickBooks Training
                                  </Link>
                                </li>
                                <li className="menu-item-1760">
                                  <Link to="service-detail.html">QuickAnswers</Link>
                                </li>
                                <li className="menu-item-1760">
                                  <Link to="service-detail.html">QuickTune-up</Link>
                                </li>
                                <li className="menu-item-1760">
                                  <Link to="service-detail.html">
                                    QuickBooks Tips
                                  </Link>
                                </li>
                                <li className="menu-item-1760">
                                  <Link to="service-detail.html">
                                    Buy QuickBooks and Save
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li className="menu-item-has-children">
                          <Link to="projects.html">NewsLetter</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="projects.html">This Month's News Letter</Link>
                            </li>
                            <li>
                              <Link to="projects-2.html">Previous NewsLetter</Link>
                            </li>
                            <li>
                              <Link to="project-detail.html">Today's NewsLetter</Link>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li className="menu-item-has-children">
                          <Link to="blog.html">Guides</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="blog.html">Life Events</Link>
                            </li>
                            <li>
                              <Link to="post.html">Business Strategies</Link>
                            </li>
                            <li>
                              <Link to="post.html">Investment Strategies</Link>
                            </li>
                            <li>
                              <Link to="post.html">
                                Tax Strategies For Business Owners
                              </Link>
                            </li>
                            <li>
                              <Link to="post.html">
                                Tax Strategies For Individuals
                              </Link>
                            </li>
                            <li>
                              <Link to="post.html">Frequently Asked Questions</Link>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li className="menu-item-has-children">
                          <Link to="blog.html">Tax Center</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="contact.html">Track Your Refund</Link>
                            </li>
                            <li>
                              <Link to="blog.html">Tax Due Dates</Link>
                            </li>
                            <li>
                              <Link to="post.html">Tax Rates</Link>
                            </li>
                            <li>
                              <Link to="post.html">
                                IRS Tax Forms and Publications
                              </Link>
                            </li>
                            <li>
                              <Link to="post.html">Record Retention Guide</Link>
                            </li>
                            <li>
                              <Link to="post.html">State Tax Forms</Link>
                            </li>
                            <li>
                              <Link to="post.html">1040 Tax Calculator</Link>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li className="menu-item-has-children">
                          <Link to="blog.html">Resources</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="contact.html">Financial Calculators</Link>
                            </li>
                            <li>
                              <Link to="blog.html">Client Portal</Link>
                            </li>
                            <li>
                              <Link to="post.html">SecureSend</Link>
                            </li>
                            <li>
                              <Link to="post.html">Recommended Books</Link>
                            </li>
                            <li>
                              <Link to="post.html">Internet Links</Link>
                            </li>
                            <li>
                              <Link to="post.html">News</Link>
                            </li>
                          </ul>
                        </li> */}
                        <li>
                          <Link to="/contactUs">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/payment">Payments</Link>
                        </li>
                        <li>
                          <Link to="#">Check Your Refund</Link>
                        </li>
                        <li style={{marginLeft: '187px'}} >
                          <span style={{color:'white'}} >
                            Call:{" "}
                            <strong className="font-size18" style={{color:'rgb(226,193,0)'}}>
                              +1 571.389.1304
                            </strong>
                          </span>{" "} <br />
                          <span style={{color:'white'}}>
                            Email:{" "}
                            <strong className="font-size18" style={{color:'rgb(226,193,0)'}}>
                              info.fintaxssolution@gmail.com
                            </strong>
                          </span>{" "}
                        </li>
                      </ul>
                    </div>
                    {/* #site-navigation */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <div className="mmenu_wrapper">
            <div className="mobile_nav collapse">
              <ul id="menu-main-menu" className="mobile_mainmenu">
                <li className="current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children">
                  <Link to="index.html">Home</Link>
                  <ul className="sub-menu">
                    <li className="menu-item-home current-page_item page-item-1530 current_page_item menu-item-2017">
                      <Link to="index.html" aria-current="page">
                        Home 1
                      </Link>
                    </li>
                    <li className="menu-item-2016">
                      <Link to="home-2.html">Home 2</Link>
                    </li>
                    <li className="menu-item-2015">
                      <Link to="home-3.html">Home 3</Link>
                    </li>
                    <li className="menu-item-2059">
                      <Link to="home-4.html">Home 4</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1731">
                  <Link to="#">Pages</Link>
                  <ul className="sub-menu">
                    <li className="menu-item-1738">
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li className="menu-item-1745">
                      <Link to="team.html">Our Team</Link>
                    </li>
                    <li className="menu-item-1742">
                      <Link to="how-it-work.html">How It Work</Link>
                    </li>
                    <li className="menu-item-1746">
                      <Link to="testimonials.html">Testimonials</Link>
                    </li>
                    <li className="menu-item-1757">
                      <Link to="services.html">Services Box</Link>
                    </li>
                    <li className="menu-item-1744">
                      <Link to="services-icon.html">Icon Box</Link>
                    </li>
                    <li className="menu-item-1740">
                      <Link to="career.html">Career</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1789">
                  <Link to="services.html">Services</Link>
                  <ul className="sub-menu">
                    <li className="menu-item-1791">
                      <Link to="service-detail.html">Financial Consulting</Link>
                    </li>
                    <li className="menu-item-1758">
                      <Link to="service-detail.html">International Business</Link>
                    </li>
                    <li className="menu-item-1790">
                      <Link to="service-detail.html">Audit &amp; Assurance</Link>
                    </li>
                    <li className="menu-item-1760">
                      <Link to="service-detail.html">Taxes and Efficiency</Link>
                    </li>
                    <li className="menu-item-1761">
                      <Link to="service-detail.html">Bonds &amp; Commodities</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="projects.html">Cases Study</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="projects.html">Cases Study 2 Columns</Link>
                    </li>
                    <li>
                      <Link to="projects-2.html">Cases Study 3 Columns</Link>
                    </li>
                    <li>
                      <Link to="project-detail.html">Cases Study Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="blog.html">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="blog.html">Blog List</Link>
                    </li>
                    <li>
                      <Link to="post.html">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="contact.html">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header;