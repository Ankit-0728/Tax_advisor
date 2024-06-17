import React from 'react'
import { Link } from 'react-router-dom';

const Footer =()=> {
  return (
    <>
     <footer id="site-footer" className="site-footer bg-second">
        <div className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div id="media_image-1" className="widget widget_media_image">
                  <a href="index.html">
                    <img src="images/logo-white.svg" alt="" />
                  </a>
                </div>
                <div
                  id="custom_html-1"
                  className="widget_text widget widget_custom_html"
                >
                  <div className="textwidget custom-html-widget">
                    <p>
                    Trust us to handle your financial needs with precision and integrity.
                    </p>
                    <p>
                      <Link to="/about" className="pagelink gray">
                        About us
                      </Link>
                    </p>
                    <div className="ot-socials bg-white">
                      <a target="_blank" href="#" rel="noopener noreferrer">
                        <i className="fa fa-facebook" />
                      </a>
                      <a target="_blank" href="#" rel="noopener noreferrer">
                        <i className="fa fa-twitter" />
                      </a>
                      <a target="_blank" href="#" rel="noopener noreferrer">
                        <i className="fa fa-pinterest-p" />
                      </a>
                      <a target="_blank" href="#" rel="noopener noreferrer">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col-lg-3 */}
              <div className="col-md-3 col-sm-6">
                <section
                  id="custom_html-2"
                  className="widget_text widget widget_custom_html padding-left"
                >
                  <h4 className="widget-title">Services</h4>
                  <div className="textwidget custom-html-widget">
                    <ul className="padd-left set_item">
                      <li>
                        <Link to="#">Individual Tax Services </Link>
                      </li>
                      <li>
                        <Link to="#">Business Tax Services</Link>
                      </li>
                      <li>
                        <Link to="#">Payroll Services</Link>
                      </li>
                      <li>
                        <Link to="#">ITIN Services</Link>
                      </li>
                      <li>
                        <Link to="#">Incorporation Services</Link>
                      </li>
                      <li>
                        <Link to="#">Accounting &amp; Bookkeeping</Link>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              {/* end col-lg-3 */}
              <div className="col-md-3 col-sm-6">
                <section
                  id="custom_html-3"
                  className="widget_text widget widget_custom_html padding-left"
                >
                  <h4 className="widget-title">Company</h4>
                  <div className="textwidget custom-html-widget">
                    <ul className="padd-left set_item">
                      <li>
                        
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        
                        <Link to="">Blog</Link>
                      </li>
                      <li>
                        
                        <Link to="/contactUs">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              {/* end col-lg-3 */}
              <div className="col-md-3 col-sm-6">
                <section
                  id="mc4wp_form_widget-1"
                  className="widget widget_mc4wp_form_widget"
                >
                  <h4 className="widget-title">Subscribe</h4>
                  {/* Mailchimp for WordPress v4.5.2 - https://wordpress.org/plugins/mailchimp-for-wp/ */}
                  <form
                    id="mc4wp-form-1"
                    className="mc4wp-form mc4wp-form-1696"
                    method="post"
                    data-id={1696}
                    data-name="Consultax Subscribe"
                  >
                    <div className="mc4wp-form-fields">
                      <div className="footer-sub">
                        <input
                          type="text"
                          name="NAME"
                          placeholder="Name"
                          required=""
                        />
                        <input
                          type="email"
                          name="EMAIL"
                          placeholder="Email Address"
                          required=""
                        />
                        <input
                          type="submit"
                          className="btn"
                          defaultValue="Subscribe"
                        />
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="_mc4wp_timestamp"
                      defaultValue={1560227031}
                    />
                    <input
                      type="hidden"
                      name="_mc4wp_form_id"
                      defaultValue={1696}
                    />
                    <input
                      type="hidden"
                      name="_mc4wp_form_element_id"
                      defaultValue="mc4wp-form-1"
                    />
                    <div className="mc4wp-response" />
                  </form>
                  {/* / Mailchimp for WordPress Plugin */}
                </section>
              </div>
              {/* end col-lg-3 */}
            </div>
          </div>
        </div>
        {/* .main-footer */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-copyright">
                  © 2024 FINNTAX SOLUTIONS LLC
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-nav text-right mobile-center">
                  <ul id="footer-menu" className="none-style">
                    <li>
                      <Link to="/terms_cond">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <a id="back-to-top" href="#" className="show" />
      </footer>
    </>
  )
}

export default Footer