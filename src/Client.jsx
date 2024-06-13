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


const Client=()=> {
  return (
    <>
      <div id="content" className="site-content">
        <Header />
        <section
          id="section-slider"
          className="fullwidthbanner-container"
          aria-label="section-slider"
        >
          <div id="revolution-slider">
          <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={image} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          {/* <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
          </div>
        </section>
        <section className="wpb_row row-fluid top-80 row-has-fill relative bg-light">
          <div className="container">
            <div className="row">
              <div className="wpb_column column_container col-sm-12">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="empty_space_70 lg-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-3">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box box-shadow-2 ionic ">
                      <i className="ion-md-medal ion-ios-medal ion-logo-medal ion-ios-medal" />
                      <div className="content-box">
                        <h4>OUR VALUES</h4>
                        <p>
                          Our firm provides outstanding service to our clients
                          because of our dedication to the three underlying
                          principles of professionalism, responsiveness and
                          quality.
                        </p>
                      </div>
                    </div>
                    <div className="empty_space_30  lg-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-3">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box box-shadow-2 ionic ">
                      <i className="ion-md-bulb ion-ios-bulb ion-logo-bulb ion-ios-bulb" />
                      <div className="content-box">
                        <h4>PROFESSIONALISM</h4>
                        <p>
                          Our firm is one of the leading firms in the area. By
                          combining our expertise, experience and the energy of
                          our staff, each client receives close personal and
                          professional attention.
                        </p>
                      </div>
                    </div>
                    <div className="empty_space_30 lg-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column column_container col-sm-6 col-md-3">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box box-shadow-2 ionic ">
                      <i className="ion-md-cash ion-ios-cash ion-logo-cash ion-ios-cash" />
                      <div className="content-box">
                        <h4>RESPONSIVENESS</h4>
                        <p>
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
              <div className="wpb_column column_container col-sm-6 col-md-3">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="service-box icon-box box-shadow-2 ionic ">
                      <i className="ion-md-headset ion-ios-headset ion-logo-headset ion-ios-headset" />
                      <div className="content-box">
                        <h4>Quality</h4>
                        <p>
                          An accounting firm is known for the quality of its
                          service. Our firm's reputation reflects the high
                          standards we demand of ourselves.
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
        <section className="wpb_row row-fluid section-padd row-has-fill row-o-equal-height row-o-content-middle row-flex bg-light">
          <div className="container">
            <div className="row">
              <div className="wpb_column column_container col-sm-12">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="row wpb_row inner row-fluid row-o-equal-height row-o-content-middle row-flex">
                      <div className="wpb_column column_container col-sm-12 col-md-6 col-has-fill custom-padd-1">
                        <div className="column-inner">
                          <div className="wpb_wrapper" />
                        </div>
                      </div>
                      <div className="bg-second wpb_column column_container col-sm-12 col-md-6">
                        <div className="column-inner">
                          <div className="wpb_wrapper">
                            <div className="empty_space_60 lg-hidden h60">
                              <span className="empty_space_inner" />
                            </div>
                            <div className="section-head padding-box-2 text-light">
                              <h6>
                                <span>WHO WE ARE</span>
                              </h6>
                              <h2 className="section-title">
                                Our Mission,
                                <br />
                                Values and Motto
                              </h2>
                            </div>
                            <div className="wpb_text_column wpb_content_element padding-box-2 text-light">
                              <div className="wpb_wrapper">
                                <p>
                                  A putrid, nicotine-shaded mist loomed over
                                  Beijing on Thursday after a massive sandstorm
                                  slammed into the Chinese capital bringing the
                                  latest airpocalypse to this smog-choked city.
                                </p>
                              </div>
                            </div>
                            <div className="wpb_text_column wpb_content_element paddtop-75 padding-box-2 info-box text-light">
                              <div className="wpb_wrapper">
                                <div className="sign">
                                  <p>
                                    <img
                                      className="alignnone size-full wp-image-1087"
                                      src="images/sign1.png"
                                      alt=""
                                      width={79}
                                      height={49}
                                    />
                                  </p>
                                  <h5>James Patterson</h5>
                                  <p>Founder &amp; CEO</p>
                                </div>
                              </div>
                            </div>
                            <div className="empty_space_60 lg-hidden">
                              <span className="empty_space_inner" />
                            </div>
                          </div>
                        </div>
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
                          <a className="pagelink gray" href="services.html">
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
                        <h4>PERSONAL & SELF-EMPLOYED TAX</h4>
                        <p>
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
                        <h4>ACCOUNTING & BOOKKEEPING</h4>
                        <p>
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
                        <p>
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
                        <h4>CFO Services</h4>
                        <p>
                        Our CFO services are designed to support your company’s financial health
      and strategic goals. We offer a comprehensive suite of services.
                        </p>
                        <a
                          className="link-box pagelink"
                          href="/cfoServices"
                          target="_self"
                        >
                          Read more
                        </a>{" "}
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
                        <p>
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
                        <p>
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
        <section className="wpb_row row-fluid section-padd-top bg-light">
          <div className="container">
            <div className="row">
              <div className="wpb_column column_container col-sm-12 col-md-9">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="section-head ">
                      <h6>
                        <span>Our Projects</span>
                      </h6>
                      <h2 className="section-title">We are the leaders</h2>
                    </div>
                    <div className="empty_space_30 md-hidden sm-hidden">
                      <span className="empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="wpb_column column_container col-sm-12 col-md-3">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element text-right mobile-left">
                      <div className="wpb_wrapper">
                        <p>
                          <a className="pagelink gray" href="projects.html">
                            All projects
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
        <section className="wpb_row row-fluid section-padd bg-second row-has-fill">
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
        </section>
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
        <section className="wpb_row row-fluid section-padd">
          <div className="container">
            <div className="row">
              <div className="wpb_column column_container col-sm-12">
                <div className="column-inner">
                  <div className="wpb_wrapper">
                    <div className="section-head ">
                      <h6>
                        <span>testimonial &amp; partner</span>
                      </h6>
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

