import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import team from './images/team.jpg'
import ceo from './images/director.jpeg'
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
          <div className="page-header"  style={{marginTop:'82px'}} >
          <img src={team} style={{width:'1264px', height: "350px"}} />
            <div className="container">
              <div className="breadc-box no-line">
                
                <div className="">
                  {/* <div className="col-md-6">
                    <h1 className="page-title">Team</h1>
                  </div> */}
                  <div className="col-md-6 mobile-left text-right">
                    <ul id="breadcrumbs" className="breadcrumbs none-style">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="active">About Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                            FINNTAX SOLUTIONS LLC, is seeking professional, hard-working, licensed CPAs with at least four years of experience.
                          </p>
                          <p style={{textAlign:'justify',paddingRight: '52px'}}>
                            The Firm demands independence, integrity, objectivity, competence and due care from all of its personnel in the conduct of its engagements. Our Firm is structured to provide leadership in achieving high quality professional performance while maintaining the concept of individual responsibility. Policies and procedures have been established providing assurance that professional engagements are properly planned and executed. Decisions are based on the substance of issues, not on form.
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
                          A visionary leader dedicated to excellence in tax and accounting services.
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