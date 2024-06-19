import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import image from './images/image.png'
import first from './images/1.jpg'
import second from './images/2.jpg'
import third from './images/3.jpg'
import fourth from './images/4.jpg'
import fifth from './images/5.jpg'
import sixth from './images/6.jpg'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Client=()=> {

  const settings = {
    dots: false,           // Hide dots
  infinite: true,
  slidesToShow: 1,       // Show one slide at a time
  slidesToScroll: 1,     // Scroll one slide at a time
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,         // Hide navigation arrows (optional)  
  };

  return (
    <>
      <div id="content" className="site-content">
        <Header />
        <section
          id="section-slider"
          className="fullwidthbanner-container"
          aria-label="section-slider"
        >
        </section>
        
        <section className="wpb_row row-fluid top-80 row-has-fill relative bg-light">
          <div className="container">
            <div className="row" style={{marginTop: "100px"}}>
              <div className="wpb_column column_container col-sm-12">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="empty_space_70 lg-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <marquee> 
                  <h3 style={{ fontSize:'15px', color:'rgb(0,117,0)'}}>
                       We are also "Certified Acceptance Agent". Please contact for ITIN.
                  </h3>
              </marquee>
              <br/>
              <br/>
              <div className="text_animation">
                  <span style={{ '--i': 1 }}>T</span>
                  <span style={{ '--i': 2 }}>a</span>
                  <span style={{ '--i': 3 }}>x</span>
                  <span style={{ '--i': 4 }}>&nbsp;&nbsp;</span>
                  <span style={{ '--i': 5 }}>R</span>
                  <span style={{ '--i': 6 }}>e</span>
                  <span style={{ '--i': 7 }}>t</span>
                  <span style={{ '--i': 8 }}>u</span>
                  <span style={{ '--i': 9 }}>r</span>
                  <span style={{ '--i': 10 }}>n</span>
                  <span style={{ '--i': 11 }}>&nbsp;&nbsp;</span>
                  <span style={{ '--i': 12 }}>a</span>
                  <span style={{ '--i': 13 }}>t</span>
                  <span style={{ '--i': 14 }}>&nbsp;&nbsp;</span>
                  <span style={{ '--i': 15 }}>$</span>
                  <span style={{ '--i': 16 }}>7</span>
                  <span style={{ '--i': 17 }}>5</span>
                  <span style={{ '--i': 18 }}>&nbsp;&nbsp;</span>
                  <span style={{ '--i': 19 }}>o</span>
                  <span style={{ '--i': 20 }}>n</span>
                  <span style={{ '--i': 21 }}>l</span>
                  <span style={{ '--i': 22 }}>y.</span>
              </div>
              <div className="contai_ner">
      <div className="cont_ent">
        <h1 id="font_change">
        Welcome to Finntax Solutions <br /><span id="font_change_light">The Tax and Accounting Professionals</span>
        </h1>
        <p>At Finntax, we are committed to providing outstanding service to our clients. Our dedication to the three underlying principles of professionalism, responsiveness, and quality sets us apart.</p>
        {/* <button className="get-started">GET STARTED →</button> */}
        <p className="" style={{marginTop:'30px'}}>
        "Join the many satisfied clients who have trusted Finntax with their tax consulting needs."  <br /><br />
        Let us help you navigate the complexities of tax laws and regulations with ease and confidence.
        </p>
      </div>
      <div class="blob"></div>
      {/* <div className="image-section">
        <img src={sixth} alt="Professional" />
        <div className="award-badge">
          <img src={fifth} alt="Readers' Choice Award 2024" />
          <p>Starting at <span>$30/mo</span></p>
        </div>
      </div> */}
    </div>
              <div className="wpb_column column_container col-sm-6 col-md-3" style={{marginTop:'30px',marginBottom:'30px'}}>
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box box-shadow-2 ionic ">
                      <i className="ion-md-medal ion-ios-medal ion-logo-medal ion-ios-medal" />
                      <div className="">
                        <h4>Our Values</h4>
                        <p className='set_item'>
                        Our firm provides outstanding service to our clients because of our dedication to the three underlying principles of professionalism, responsiveness, and quality, ensuring exceptional results.
                        </p>
                      </div>
                    </div>
                    <div className="empty_space_30  lg-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-3" style={{marginTop:'30px',marginBottom:'30px'}}>
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box box-shadow-2 ionic ">
                      <i className="ion-md-bulb ion-ios-bulb ion-logo-bulb ion-ios-bulb" />
                      <div >
                        <h4>Professionalism</h4>
                        <p className='set_item'>
                        Our firm is one of the leading firms in the area. By combining our expertise, experience and the energy of our staff, each client receives close attention with exceptional service and results.
                        </p>
                      </div>
                    </div>
                    <div className="empty_space_30 lg-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-3" style={{marginTop:'30px',marginBottom:'30px'}}>
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box box-shadow-2 ionic ">
                      <i className="ion-md-cash ion-ios-cash ion-logo-cash ion-ios-cash" />
                      <div>
                        <h4>Responsiveness</h4>
                        <p className='set_item'>
                          Companies who choose our firm rely on competent advice
                          and fast, accurate personnel. We provide total financial
                          services to individuals, large and small businesses and
                          other agencies.
                        </p>
                      </div>
                    </div>
                    <div className="empty_space_30 lg-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-3" style={{marginTop:'30px',marginBottom:'30px'}}>
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box box-shadow-2 ionic ">
                      <i className="ion-md-headset ion-ios-headset ion-logo-headset ion-ios-headset" />
                      <div>
                        <h4>Quality</h4>
                        <p className='set_item'>
                        An accounting firm is known for the quality of its service. Our firm's reputation reflects the high standards we demand of ourselves, ensuring excellence, and exceptional client satisfaction.
                        </p>
                        {/* <p>Our primary goal as a trusted advisor is to be available and to provide insightful advice to enable our clients to make informed financial decisions. We do not accept anything less from ourselves and this is what we deliver to you.</p>
                                    <p>We feel it is extremely important to continually professionally educate ourselves to improve our technical expertise, financial knowledge and service to our clients.</p>
                                    <p>Our high service quality and "raving fan" clients are the result of our commitment to excellence.</p>
                                    <p>We will answer all of your questions, as they impact both your tax and financial situations. We welcome you to contact us anytime.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="wpb_row row-fluid section-padd">
          <div className="container">
            <div className="row">
              <div className="wpb_column column_container col-sm-12 col-md-9">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="section-head ">
                      <h6>
                        <span>OUR SERVICES</span>
                      </h6>
                      <h2 className="section-title">What we bring to you</h2>
                    </div>
                    <div className="empty_space_30 md-hidden sm-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-12 col-md-3">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element text-right mobile-left">
                      <div className="wpb_wrapper">
                        <p>
                          <a className="pagelink gray" href="">
                            All services
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-4">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box  ionic  hover-box">
                      <i className="ion-md-umbrella ion-logo-umbrella" />
                      <div className="content-box">
                        <h4>Individual Tax Services</h4>
                        <p className='set_item'>
                        We’ll assist you in navigating the complexities of filing your income tax return when the time comes.
                        </p>
                        <a
                          className="link-box pagelink"
                          href="/financial"
                          target="_self"
                        >
                          Read more
                        </a>{" "}
                      </div>
                    </div>
                    <div className="empty_space_30">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-4">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box  ionic  hover-box">
                      <i className="ion-md-cube ion-logo-cube" />
                      <div className="content-box">
                        <h4 style={{fontSize:'16px'}}>Accounting & Bookkeeping</h4>
                        <p className='set_item'>
                        Bookkeeping involves the systematic recording of all financial transactions within a business. These transactions include sales, purchases, payments, receipts, and expenses. Bookkeepers maintain accurate and up-to-date records of these transactions using accounting software or manual ledgers.
                        </p>
                        <a
                          className="link-box pagelink"
                          href="/book_account"
                          target="_self"
                        >
                          Read more
                        </a>{" "}
                      </div>
                    </div>
                    <div className="empty_space_30">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-4">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box  ionic  hover-box">
                      <i className="ion-md-podium ion-logo-podium" />
                      <div className="content-box">
                        <h4>Payroll Services</h4>
                        <p className='set_item'>
                        Managing payroll can be a complex and time-consuming task for small business owners, given the numerous regulations and requirements. Instead of spending hours each month on payroll functions, let us handle it for you so you can focus on running and growing your business.
                        </p>
                        <a
                          className="link-box pagelink"
                          href="/payroll"
                          target="_self"
                        >
                          Read more
                        </a>{" "}
                      </div>
                    </div>
                    <div className="empty_space_30">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-4">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box  ionic  hover-box">
                      <i className="ion-md-list-box ion-logo-list-box" />
                      <div className="content-box">
                        <h4>ITIN Services</h4>
                        <p className='set_item'>
                        We specialize in providing comprehensive ITIN (Individual Taxpayer Identification Number) services to individuals who require a U.S. taxpayer identification number for tax purposes but are not eligible for a Social Security Number (SSN).
                        </p>
                        <Link
                          className="link-box pagelink"
                         
                          to='/cfoServices'
                          target="_self"
                        >
                          Read more
                        </Link>{" "}
                      </div>
                    </div>
                    <div className="empty_space_30 lg-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-4">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box  ionic  hover-box">
                      <i className="ion-md-cash ion-logo-cash" />
                      <div className="content-box">
                        <h4>Incorporation Services</h4>
                        <p className='set_item'>
                        Assist in choosing the appropriate legal structure for your business, such as LLC or Corporation, based on your specific needs and goals.
                        </p>
                        <a
                          className="link-box pagelink"
                          href="/incorpServices"
                          target="_self"
                        >
                          Read more
                        </a>{" "}
                      </div>
                    </div>
                    <div className="empty_space_30 lg-hidden md-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-4">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box  ionic  hover-box">
                      <i className="ion-md-wallet ion-logo-wallet" />
                      <div className="content-box">
                        <h4>Business Tax Services</h4>
                        <p className='set_item'>
                        Our Business Tax Services are designed to help your company comply with tax regulations and minimize tax liabilities. We provide a comprehensive range of services to meet your business's needs.
                        </p>
                        <a
                          className="link-box pagelink"
                          href="/businessTax"
                          target="_self"
                        >
                          Read more
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="wpb_row row-fluid section-padd-bot row-has-fill row-full-width row-no-padding bg-light">
          <div className="row">
            <div className="wpb_column column_container col-sm-12">
              <div className="column-inner">
                <div className="wpb_wrapper">
                  <div className="project-list-2">
                    <div
                      className="project-slider-2 projects"
                      data-show={1}
                      data-auto=""
                      data-dot="true"
                    >
                      <div className="col-md-12">
                        <div className="project-item">
                          <div className="slide-img">
                            <img
                              src="https://via.placeholder.com/1170x550"
                              alt=""
                            />
                          </div>
                          <div className="inner row">
                            <div className="col-md-3">
                              <img
                                src="https://via.placeholder.com/156x29"
                                alt="logo"
                              />{" "}
                              Contract Project: May 22, 2017
                              <div className="gaps lg-hidden" />
                            </div>
                            <div className="col-md-9">
                              <h4>
                                <a href="project-detail.html">
                                  Financial Report 2019
                                </a>
                              </h4>
                              <p>
                                Fames integer pretium commodo sed orci magnis
                                euismod a, fusce felis leo habitant ridiculus
                                auctor nisl id, cras nisi porta mus enim dapibus
                                aenean.
                              </p>
                              <a
                                className="pagelink gray"
                                href="project-detail.html"
                              >
                                View details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="project-item">
                          <div className="slide-img">
                            <img
                              src="https://via.placeholder.com/1170x550"
                              alt=""
                            />
                          </div>
                          <div className="inner row">
                            <div className="col-md-3">
                              <img
                                src="https://via.placeholder.com/156x29"
                                alt="logo"
                              />{" "}
                              Contract Project: November 15, 2018
                              <div className="gaps lg-hidden" />
                            </div>
                            <div className="col-md-9">
                              <h4>
                                <a href="project-detail.html">
                                  Business Growth Solutions
                                </a>
                              </h4>
                              <p>
                                Fames integer pretium commodo sed orci magnis
                                euismod a, fusce felis leo habitant ridiculus
                                auctor nisl id, cras nisi porta mus enim dapibus
                                aenean.
                              </p>
                              <a
                                className="pagelink gray"
                                href="project-detail.html"
                              >
                                View details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="project-item">
                          <div className="slide-img">
                            <img
                              src="https://via.placeholder.com/1170x550"
                              alt=""
                            />
                          </div>
                          <div className="inner row">
                            <div className="col-md-3">
                              <img
                                src="https://via.placeholder.com/156x29"
                                alt="logo"
                              />{" "}
                              Contract Project: September 14, 2017
                              <div className="gaps lg-hidden" />
                            </div>
                            <div className="col-md-9">
                              <h4>
                                <a href="project-detail.html">
                                  MO Insurance Finance
                                </a>
                              </h4>
                              <p>
                                Fames integer pretium commodo sed orci magnis
                                euismod a, fusce felis leo habitant ridiculus
                                auctor nisl id, cras nisi porta mus enim dapibus
                                aenean.
                              </p>
                              <a
                                className="pagelink gray"
                                href="project-detail.html"
                              >
                                View details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="project-item">
                          <div className="slide-img">
                            <img
                              src="https://via.placeholder.com/1170x550"
                              alt=""
                            />
                          </div>
                          <div className="inner row">
                            <div className="col-md-3">
                              <img
                                src="https://via.placeholder.com/156x29"
                                alt="logo"
                              />{" "}
                              Contract Project: April 24, 2016
                              <div className="gaps lg-hidden" />
                            </div>
                            <div className="col-md-9">
                              <h4>
                                <a href="project-detail.html">
                                  Enterprise Loan 2016
                                </a>
                              </h4>
                              <p>
                                Fames integer pretium commodo sed orci magnis
                                euismod a, fusce felis leo habitant ridiculus
                                auctor nisl id, cras nisi porta mus enim dapibus
                                aenean.
                              </p>
                              <a
                                className="pagelink gray"
                                href="project-detail.html"
                              >
                                View details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="arrows-slick">
                        <button
                          type="button"
                          className="btn-left slick-arrow prev-nav"
                        >
                          <i className="fa fa-angle-left" />
                        </button>
                        <button
                          type="button"
                          className="btn-right slick-arrow next-nav"
                        >
                          <i className="fa fa-angle-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="wpb_row row-fluid section-padd bg-second row-has-fill">
          <div className="container">
            <div className="row">
              <div className="wpb_column column_container col-sm-6">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <h2 className="custom_heading text-light">
                      Request a Free
                      <br />
                      Call Back
                    </h2>
                    <div className="wpb_text_column wpb_content_element  text-light">
                      <div className="wpb_wrapper">
                        <p>
                          Provide discussion information and we’ll get back to
                          <br /> you as soon as possible
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div
                      role="form"
                      className="wpcf7"
                      id="wpcf7-f1626-p1530-o1"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div className="screen-reader-response" />
                      <form action="" method="post" className="wpcf7-form">
                        <div className="row">
                          <div className="col-md-6">
                            <span className="wpcf7-form-control-wrap your-name">
                              <input
                                type="text"
                                name="your-name"
                                defaultValue=""
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                required=""
                                aria-invalid="false"
                                placeholder="Your Name"
                              />
                            </span>
                          </div>
                          <div className="col-md-6">
                            <span className="wpcf7-form-control-wrap your-service">
                              <select
                                name="your-service"
                                className="wpcf7-form-control wpcf7-select"
                                aria-invalid="false"
                              >
                                <option value="Audit & Assurance">
                                  Audit &amp; Assurance
                                </option>
                                <option value="Financial Consulting">
                                  Financial Consulting
                                </option>
                                <option value="Trades & Stocks">
                                  Trades &amp; Stocks
                                </option>
                                <option value="Strategic Planning">
                                  Strategic Planning
                                </option>
                                <option value="Financial Projections">
                                  Financial Projections
                                </option>
                              </select>
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <span className="wpcf7-form-control-wrap your-email">
                              <input
                                type="email"
                                name="your-email"
                                defaultValue=""
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                required=""
                                placeholder="Email Address"
                              />
                            </span>
                          </div>
                          <div className="col-md-6">
                            <span className="wpcf7-form-control-wrap your-phone">
                              <input
                                type="tel"
                                name="your-phone"
                                defaultValue=""
                                size={40}
                                className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                                placeholder="Phone Number"
                              />
                            </span>
                          </div>
                        </div>
                        <p>
                          <input
                            type="submit"
                            defaultValue="SUBMIT"
                            className="wpcf7-form-control wpcf7-submit btn"
                          />
                        </p>
                        <div className="wpcf7-response-output wpcf7-display-none" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="wpb_row row-fluid section-padd bg-light">
          <div className="container">
            <div className="row">
              <div className="wpb_column column_container col-sm-12 col-md-9">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="section-head ">
                      <h6>
                        <span>our blog</span>
                      </h6>
                      <h2 className="section-title">Our latest news</h2>
                    </div>
                    <div className="empty_space_30 md-hidden sm-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-12 col-md-3">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element text-right mobile-left">
                      <div className="wpb_wrapper">
                        <p>
                          <a className="pagelink gray" href="blog.html">
                            View all posts
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-12">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="news-slider posts-grid row"
                      data-show={3}
                      data-auto="true"
                    >
                      <div>
                        <article className="news-item content-area">
                          <div className="inner-item radius-top">
                            <div className="thumb-image">
                              <a href="post.html">
                                <img
                                  src="https://via.placeholder.com/770x350"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="inner-post radius-bottom">
                              <div className="entry-meta">
                                <span className="posted-on">
                                  <time className="entry-date">
                                    September 11, 2017
                                  </time>
                                </span>
                                <span className="posted-in">
                                  <a href="#">Consulting</a>
                                </span>
                              </div>
                              <h4 className="entry-title">
                                <a href="post.html">
                                  Solution financial for good startup
                                </a>
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing
                                elit ad, tincidunt senectus felis platea natoque
                                mattis....
                              </p>
                              <a className="post-link" href="post.html">
                                Read more
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="news-item content-area">
                          <div className="inner-item radius-top">
                            <div className="thumb-image">
                              <a href="post.html">
                                <img
                                  src="https://via.placeholder.com/770x350"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="inner-post radius-bottom">
                              <div className="entry-meta">
                                <span className="posted-on">
                                  <time className="entry-date">
                                    September 11, 2017
                                  </time>
                                </span>
                                <span className="posted-in">
                                  <a href="#">Consulting</a>
                                </span>
                              </div>
                              <h4 className="entry-title">
                                <a href="post.html">
                                  Why Tech Should Behave More Like Finance
                                </a>
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing
                                elit ad, tincidunt senectus felis platea natoque
                                mattis....
                              </p>
                              <a className="post-link" href="post.html">
                                Read more
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="news-item content-area">
                          <div className="inner-item radius-top">
                            <div className="thumb-image">
                              <a href="post.html">
                                <img
                                  src="https://via.placeholder.com/770x350"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="inner-post radius-bottom">
                              <div className="entry-meta">
                                <span className="posted-on">
                                  <time className="entry-date">
                                    September 11, 2017
                                  </time>
                                </span>
                                <span className="posted-in">
                                  <a href="#">Consulting</a>
                                </span>
                              </div>
                              <h4 className="entry-title">
                                <a href="post.html">
                                  Cutting Your Restaurant’s Operations Costs
                                </a>
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing
                                elit ad, tincidunt senectus felis platea natoque
                                mattis....
                              </p>
                              <a className="post-link" href="post.html">
                                Read more
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="news-item content-area">
                          <div className="inner-item radius-top">
                            <div className="thumb-image">
                              <a href="post.html">
                                <img
                                  src="https://via.placeholder.com/770x350"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="inner-post radius-bottom">
                              <div className="entry-meta">
                                <span className="posted-on">
                                  <time className="entry-date">
                                    September 11, 2017
                                  </time>
                                </span>
                                <span className="posted-in">
                                  <a href="#">Consulting</a>
                                </span>
                              </div>
                              <h4 className="entry-title">
                                <a href="post.html">
                                  Solution financial for good startup
                                </a>
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing
                                elit ad, tincidunt senectus felis platea natoque
                                mattis....
                              </p>
                              <a className="post-link" href="post.html">
                                Read more
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="news-item content-area">
                          <div className="inner-item radius-top">
                            <div className="thumb-image">
                              <a href="post.html">
                                <img
                                  src="https://via.placeholder.com/770x350"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="inner-post radius-bottom">
                              <div className="entry-meta">
                                <span className="posted-on">
                                  <time className="entry-date">
                                    September 11, 2017
                                  </time>
                                </span>
                                <span className="posted-in">
                                  <a href="#">Consulting</a>
                                </span>
                              </div>
                              <h4 className="entry-title">
                                <a href="post.html">
                                  Cutting Your Restaurant’s Operations Costs
                                </a>
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing
                                elit ad, tincidunt senectus felis platea natoque
                                mattis....
                              </p>
                              <a className="post-link" href="post.html">
                                Read more
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="news-item content-area">
                          <div className="inner-item radius-top">
                            <div className="thumb-image">
                              <a href="post.html">
                                <img
                                  src="https://via.placeholder.com/770x350"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="inner-post radius-bottom">
                              <div className="entry-meta">
                                <span className="posted-on">
                                  <time className="entry-date">
                                    September 11, 2017
                                  </time>
                                </span>
                                <span className="posted-in">
                                  <a href="#">Consulting</a>
                                </span>
                              </div>
                              <h4 className="entry-title">
                                <a href="post.html">
                                  Why Tech Should Behave More Like Finance
                                </a>
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing
                                elit ad, tincidunt senectus felis platea natoque
                                mattis....
                              </p>
                              <a className="post-link" href="post.html">
                                Read more
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="wpb_row row-fluid section-padd" style={{padding:'60px'}}>
          <div className="container">
            <div className="row">
              <div className="wpb_column column_container col-sm-12">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="section-head ">
                      <h2 className="section-title">What our clients says?</h2>
                    </div>
                    <div className="empty_space_30">
                      <span className="empty_space_inner" />
                    </div>
                    <div className="testi-slider" data-show={3} data-arrow="true">
                      <div>
                        <div className="testi-item box-shadow-hover">
                          <div className="testi-head">
                            <img
                              width={50}
                              height={50}
                              src={first}
                              className="client-img"
                              alt=""
                            />
                            <h5>
                              Quynh Anh
                              <span className="font12 normal">from Hanoi</span>
                            </h5>
                          </div>
                          <div className="line" />
                          <div className="testi-content">
                            <i className="ion-md-quote" />
                            {/* <img src="images/stars.png" alt="" /> */}
                            <p >
                              I am alone, and feel the charm of existence in this
                              spot, which was created for the bliss of souls like
                              mine. Thank you !
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="testi-item box-shadow-hover">
                          <div className="testi-head">
                            <img
                              width={50}
                              height={50}
                              src={second}
                              className="client-img"
                              alt=""
                            />
                            <h5>
                              Nora Roberts
                              <span className="font12 normal">from Paris</span>
                            </h5>
                          </div>
                          <div className="line" />
                          <div className="testi-content">
                            <i className="ion-md-quote" />
                            {/* <img
                              width={86}
                              height={12}
                              // src="images/stars.png"
                              className="attachment-full size-full"
                              alt=""
                            /> */}
                            <p>
                              I am so happy, my dear friend, so absorbed in the
                              exquisite sense of mere tranquil existence, that I
                              neglect my talents.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="testi-item box-shadow-hover">
                          <div className="testi-head">
                            <img
                              width={50}
                              height={50}
                              src={third}
                              className="client-img"
                              alt=""
                            />
                            <h5>
                              John Doe
                              <span className="font12 normal">from Beijing</span>
                            </h5>
                          </div>
                          <div className="line" />
                          <div className="testi-content">
                            <i className="ion-md-quote" />
                            {/* <img
                              width={86}
                              height={12}
                              src="images/stars.png"
                              alt=""
                            /> */}
                            <p>
                              I should be incapable of drawing a single stroke at
                              the present moment; and yet I feel that I never was
                              a greater artist than now.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="testi-item box-shadow-hover">
                          <div className="testi-head">
                            <img
                              width={50}
                              height={50}
                              src={fourth}
                              className="client-img"
                              alt=""
                            />
                            <h5>
                              Quynh Anh
                              <span className="font12 normal">from Hanoi</span>
                            </h5>
                          </div>
                          <div className="line" />
                          <div className="testi-content">
                            <i className="ion-md-quote" />
                            {/* <img src="images/stars.png" alt="" /> */}
                            <p>
                              I am alone, and feel the charm of existence in this
                              spot, which was created for the bliss of souls like
                              mine. Thank you !
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="testi-item box-shadow-hover">
                          <div className="testi-head">
                            <img
                              width={50}
                              height={50}
                              src={fifth}
                              className="client-img"
                              alt=""
                            />
                            <h5>
                              Nora Roberts
                              <span className="font12 normal">from Paris</span>
                            </h5>
                          </div>
                          <div className="line" />
                          <div className="testi-content">
                            <i className="ion-md-quote" />
                            {/* <img
                              width={86}
                              height={12}
                              src="images/stars.png"
                              className="attachment-full size-full"
                              alt=""
                            /> */}
                            <p>
                              I am so happy, my dear friend, so absorbed in the
                              exquisite sense of mere tranquil existence, that I
                              neglect my talents.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="testi-item box-shadow-hover">
                          <div className="testi-head">
                            <img
                              width={50}
                              height={50}
                              src={sixth}
                              className="client-img"
                              alt=""
                            />
                            <h5>
                              John Doe
                              <span className="font12 normal">from Beijing</span>
                            </h5>
                          </div>
                          <div className="line" />
                          <div className="testi-content">
                            <i className="ion-md-quote" />
                            {/* <img
                              width={86}
                              height={12}
                              src="images/stars.png"
                              alt=""
                            /> */}
                            <p>
                              I should be incapable of drawing a single stroke at
                              the present moment; and yet I feel that I never was
                              a greater artist than now.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="empty_space_80">
                      <span className="empty_space_inner" />
                    </div>
                    <div
                      className="partner-slider image-carousel text-center"
                      data-show={5}
                      data-arrow="false"
                    >
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="partner-item text-center clearfix">
                          <div className="inner">
                            <div className="thumb">
                              <img
                                src="https://via.placeholder.com/150x30"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      
  </>
  )
}

export default Client;

