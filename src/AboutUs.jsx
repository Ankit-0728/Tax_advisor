import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import team from './images/team.jpg'
import ceo from './images/Directors.jpeg'
import new_md from './images/marketingH.jpeg'
import trainer from './images/trainer.jpg'
import trainer_1 from './images/trainer1.jpg'
import trainer_2 from './images/trainer3.jpg'
import hum_res from './images/hr.jpg'
import team_1 from './images/team1.jpg'
import team_2 from './images/team2.jpg'
import team_3 from './images/team3.jpg'
import team_4 from './images/team4.jpg'
import join_us from './images/join_us.jpg'




const AboutUs = () => {

  return (
    <>
      <div id="page" className="site">
        <Header />
        <div id="content" className="site-content"  >
          
          <section className="wpb_row row-fluid section-padd">
            <div className="container">
              <div className="row">
                <div className="wpb_column column_container col-sm-12" style={{
                      backgroundColor: "white",
                      border: "2px solid white"
                }}>
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="section-head ">
                        <h2 className="section-title linear_color">About Us</h2>
                      </div>
                      <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                          <div style={{display:'flex'}}>
                          <div  >
                          <p style={{textAlign:'justify'}}>
                          At FINNTAX SOLUTIONS LLC, we specialize in delivering comprehensive financial and tax advisory services tailored to meet the diverse needs of our clients. With a commitment to excellence and a deep understanding of financial regulations, our team of experienced professionals strives to provide personalized solutions that empower our clients to achieve their financial goals.
                          </p>
                          <p style={{textAlign:'justify',paddingRight: '52px'}}>
                          Our mission is to be a trusted partner to individuals and businesses alike, offering expert guidance and innovative strategies to optimize financial outcomes. We aim to build lasting relationships based on integrity, transparency, and results.
                          </p>
                          </div>

                         
                          </div>
                          
                          <div>
                          <p style={{textAlign:'justify',paddingRight: '360px'}}>
                            <h3>What We Offer</h3>
                            <ul>
                                <li><strong>Tax Services:</strong> From tax planning to preparation and compliance, we ensure our clients meet their tax obligations efficiently while minimizing liabilities.</li>
                                <li><strong>Financial Consulting:</strong> Our consulting services encompass a wide range of financial matters, including budgeting, investment strategies, and financial planning for both short-term objectives and long-term growth.</li>
                                <li><strong>Business Advisory:</strong> For businesses, we provide strategic insights and advisory services to enhance profitability, manage risk, and foster sustainable growth.</li>
                            </ul>
                          </p>
                          <p style={{textAlign:'justify',paddingRight: '360px'}}>
                          <h3>Why Choose Us?</h3>
                            <ul>
                                <li><strong>Expertise:</strong> Our team consists of seasoned professionals with extensive knowledge in tax law, finance, and business strategy.</li>
                                <li><strong>Client-Centric Approach:</strong> We prioritize understanding our clients' unique needs and goals to deliver tailored solutions that drive success.</li>
                                <li><strong>Commitment to Excellence:</strong> We uphold the highest standards of professionalism, ethics, and service quality in everything we do.</li>
                            </ul>

                          </p>
                          <p style={{textAlign:'justify',paddingRight: '360px'}}>
                          Whether you're an individual looking for tax advice or a business seeking comprehensive financial solutions, FINNTAX SOLUTIONS LLC is here to help.<b><u>Contact us</u></b> today to discover how we can assist you in navigating the complexities of finance and taxation with confidence and clarity.
                          </p>
                        
                          </div>
                         
                          <div className="empty_space_30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-12 col-md-6" style={{marginTop:'30px'}}>
                  <div className="column-inner" style={{border: '2px solid white',
    borderRadius: '10px'}}>
                    <div className="wpb_wrapper">
                      <div className="member-item-3 radius">
                        <div className="avatar">
                          <img src={ceo} alt="" style={{    height: "255px",
    width: "268px"}} />{" "}
                        </div>
                        <div className="mem-info">
                          <h5>
                            Dilip Agarwal
                            <span className="font12 normal">Founder &amp; CEO</span>
                          </h5>
                          <div className="line" />
                          <p style={{textAlign:'justify'}}>
                          A visionary leader highly dedicated to excellence in taxation and accounting services.
                          </p>
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="empty_space_30 lg-hidden" />
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-12 col-md-6" style={{marginTop:'30px'}}>
                  <div className="column-inner" style={{border: '2px solid white',
    borderRadius: '10px'}}>
                    <div className="wpb_wrapper">
                      <div className="member-item-3 radius">
                        <div className="avatar">
                          <img src={new_md} alt="" style={{height: "255px",
    width: "268px"}} />{" "}
                        </div>
                        <div className="mem-info">
                          <h5>
                            Kirti Agarwal
                            <span className="font12 normal">Marketing Manager</span>
                          </h5>
                          <div className="line" />
                          <p style={{textAlign:'justify'}}>
                          An expert who drives our innovative strategies to connect and serve our valued clients.
                          </p>
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="wpb_row row-fluid section-padd no-top">
            <div className="container">
              <div className="row">
                <div className="wpb_column column_container col-sm-12">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="section-head ">
                        <h6>
                          <span>Our Experts</span>
                        </h6>
                        <h2 className="section-title">
                          Our team of leading experts
                        </h2>
                      </div>
                      <div className="empty_space_30" />
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-6 col-md-3">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="member-item radius">
                        <div className="avatar">
                          <img src={trainer} alt="" />{" "}
                          <span className="overlay" />
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                        <div className="mem-info">
                          <h5>
                            Margaret Atwood
                            <span className="font12 normal">Experts</span>
                          </h5>
                          <p />
                        </div>
                      </div>
                      <div className="empty_space_30" />
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-6 col-md-3">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="member-item radius">
                        <div className="avatar">
                          <img src={trainer_1} alt="" />{" "}
                          <span className="overlay" />
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                        <div className="mem-info">
                          <h5>
                            Thomas Jefferson
                            <span className="font12 normal">Experts</span>
                          </h5>
                          <p />
                        </div>
                      </div>
                      <div className="empty_space_30" />
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-6 col-md-3">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="member-item radius">
                        <div className="avatar">
                          <img src={trainer_2} alt="" />{" "}
                          <span className="overlay" />
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                        <div className="mem-info">
                          <h5>
                            Britney Spears
                            <span className="font12 normal">Experts</span>
                          </h5>
                          <p />
                        </div>
                      </div>
                      <div className="empty_space_30" />
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-6 col-md-3">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="member-item radius">
                        <div className="avatar">
                          <img src={hum_res} alt="" />{" "}
                          <span className="overlay" />
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                        <div className="mem-info">
                          <h5>
                            Erica Romaguera
                            <span className="font12 normal">Experts</span>
                          </h5>
                          <p />
                        </div>
                      </div>
                      <div className="empty_space_30" />
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-6 col-md-3">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="member-item radius">
                        <div className="avatar">
                          <img src={team_1} alt="" />{" "}
                          <span className="overlay" />
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                        <div className="mem-info">
                          <h5>
                            Stephen King
                            <span className="font12 normal">Experts</span>
                          </h5>
                          <p />
                        </div>
                      </div>
                      <div className="empty_space_30  lg-hidden" />
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-6 col-md-3">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="member-item radius">
                        <div className="avatar">
                          <img src={team_2} alt="" />{" "}
                          <span className="overlay" />
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                        <div className="mem-info">
                          <h5>
                            Emily R. King
                            <span className="font12 normal">Experts</span>
                          </h5>
                          <p />
                        </div>
                      </div>
                      <div className="empty_space_30  lg-hidden" />
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-6 col-md-3">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="member-item radius">
                        <div className="avatar">
                          <img src={team_3} alt="" />{" "}
                          <span className="overlay" />
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                        <div className="mem-info">
                          <h5>
                            Julia Drosten
                            <span className="font12 normal">Experts</span>
                          </h5>
                          <p />
                        </div>
                      </div>
                      <div className="empty_space_30  lg-hidden md-hidden" />
                    </div>
                  </div>
                </div>
                <div className="wpb_column column_container col-sm-6 col-md-3">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="member-item radius">
                        <div className="avatar">
                          <img src={team_4} alt="" />{" "}
                          <span className="overlay" />
                          <div className="social-mem">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-linkedin" />
                            </a>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                        <div className="mem-info">
                          <h5>
                            Melinda Leigh
                            <span className="font12 normal">Experts</span>
                          </h5>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="wpb_row row-fluid section-padd no-top">
            <div className="container">
              <div className="row">
                <div className="wpb_column column_container col-sm-12 ">
                  <div className="column-inner">
                    <div className="wpb_wrapper">
                      <div className="row wpb_row inner row-fluid cta-section row-has-fill back_image">
                        <div className="wpb_column column_container col-sm-12 col-md-9">
                          <div className="column-inner ">
                            <div className="wpb_wrapper">
                              <div className="section-head mobile-center text-light">
                                <h6>
                                  <span>Join our team</span>
                                </h6>
                                <h2 className="section-title">
                                  You want to join us ?
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column column_container col-sm-12 col-md-3 ">
                          <div className="column-inner ">
                          
                            <div className="wpb_wrapper">
                              <div className="empty_space_12 sm-hidden" />
                              <div className="text-right mobile-center light-hover">
                                <a className="btn" href="contact.html">
                                  JOIN NOW
                                </a>
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
          </section> */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AboutUs