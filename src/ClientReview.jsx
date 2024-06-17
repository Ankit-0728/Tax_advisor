import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import './assets/contact.css';
import about_img from './images/about_banner.jpg';

const ClientReview=()=> {
  return (
    <>
    <Header />
  <div className="background-gradient"  />
  <div className="background-gradient"  />
  <div className="section content">
  <div className="page-header">
					<img src={about_img} style={{width: "1300px",
    height: "240px"}} />
						<div className="container">
							
							<div className="breadc-box no-line">
								
									<div className="col-md-6 mobile-left text-right">
										<ul id="breadcrumbs" className="breadcrumbs none-style">
											<li>
												<a href="index.html">Home</a>
											</li>
											<li className="active">Reviews</li>
										</ul>
								</div>
							</div>
						</div>
					</div>
  <div className="container">
    <div className="row">
        <div className="col-md-8">
            <div id="page-pad" className="cp_clientreviews">
                <div id="Header">
                    <h3 style={{marginTop:'20px'}}>Reviews</h3>
                </div>
                <div id="Text">
                    <p style={{textAlign:'justify'}}>
                        We strive to provide the best possible service for our clients.
                        Please leave a review to let us know how we are doing and to
                        share your experience with others.
                    </p>
                </div>
                <div id="Blog">
                    <br />
                    <div className="xstars">
                        <form id="review-form" action="/client-reviews.php" method="post">
                            <h2>Write Your Review</h2>
                            <div className="star-rating">
                                <input type="radio" id="star5" name="stars" value="5" />
                                <label htmlFor="star5" title="5 stars">
                                    <i className="fa fa-star"></i>
                                </label>
                                <input type="radio" id="star4" name="stars" value="4" />
                                <label htmlFor="star4" title="4 stars">
                                    <i className="fa fa-star"></i>
                                </label>
                                <input type="radio" id="star3" name="stars" value="3" />
                                <label htmlFor="star3" title="3 stars">
                                    <i className="fa fa-star"></i>
                                </label>
                                <input type="radio" id="star2" name="stars" value="2" />
                                <label htmlFor="star2" title="2 stars">
                                    <i className="fa fa-star"></i>
                                </label>
                                <input type="radio" id="star1" name="stars" value="1" />
                                <label htmlFor="star1" title="1 star">
                                    <i className="fa fa-star"></i>
                                </label>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div className="form-group">
                        <label className="control-label" htmlFor="review">
                            Your Review:
                        </label>
                        <textarea
                            className="form-control"
                            rows={10}
                            placeholder="Your Review"
                            name="review"
                            id="review"
                            maxLength={999}
                            required=""
                            defaultValue={""}
                        />
                        <span id="reviewInfo" className="help-block pull-right">
                            {/* <span id="remaining">999</span> Characters remaining */}
                        </span>
                    </div>
                    <h3>Your Info:</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            id="name"
                            defaultValue=""
                            required=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Your City"
                            name="city"
                            id="city"
                            defaultValue=""
                            required=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            id="email"
                            defaultValue=""
                            required=""
                        />
                    </div>
                    <label htmlFor="hCheck" className="hidden" aria-hidden="true">
                        hCheck
                    </label>
                    <input
                        type="text"
                        name="hCheck"
                        id="hCheck"
                        aria-hidden="true"
                        className="hidden"
                    />
                    <input
                        className="btn btn-primary"
                        type="submit"
                        defaultValue="Submit My Review!"
                        // style={{backgroundColor:'blue'}}
                    />
                    {/* <div id="submitInfo" className="help-block">
                        By clicking <strong>Submit</strong>, I authorize the sharing of
                        my name and review on the web. (email will not be shared)
                    </div> */}
                    <input type="hidden" name="submitted" defaultValue="y" />
                </div>
                <br />
                {/* <div id="Footer">
                    <center>
                        <p style={{textAlign:'justify'}}>
                            6518 Lee Valley Drive
                            <br />
                            APT 201 Springfield<br />
                            Virginia 22150 USA
                            <br />
                            <b>Phone: +1 571-389-1304</b>
                            <br />
                            <a href="mailto:info@finntaxsolutions.com">info@finntaxsolutions.com</a>
                        </p>
                    </center>
                </div> */}
            </div>
        </div>
        <div className="col-md-4">
            <div className="sidebar">
                {/* <div className="module">
                    <h3>Featured Articles</h3>
                    <div id="rssFeedReader"></div>
                    <div className="clearfix" />
                </div> */}
                {/* <div className="module">
                    <h3>Subscribe To Our Newsletter</h3>
                    <form
                        method="post"
                        action="https://www.cpaemailmarketing.com/client/campsub.php"
                        className="newsletter-form"
                    >
                        <input type="hidden" name="function" defaultValue="customer2" />
                        <input type="hidden" name="un" defaultValue="terrazas" />
                        <input type="hidden" name="custom5" defaultValue="terrazas" />
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            defaultValue="E-Mail"
                            onclick="clickclear(this, 'E-Mail')"
                            onblur="clickrecall(this,'E-Mail')"
                        />
                        <input
                            type="submit"
                            className="read-more pull-right"
                            defaultValue="Subscribe"
                            name="submit"
                        />
                    </form>
                    <br className="clearfloat" />
                    <div className="clearfix" />
                </div> */}
                <div className="clearfix" />
                <div className="module hidden-xs hidden-sm">
                <div className="module module-contact" style={{marginLeft: "87px"}}>
                    <h3 style={{marginTop: "165px"}}>Contact Us</h3>
                </div>
                <div style={{marginLeft:"90px"}} >
                    
                        <p style={{textAlign:'justify'}}>
                            6518 Lee Valley Drive
                            <br />
                            APT 201 Springfield<br />
                            Virginia 22150 USA
                            <br />
                            <b>Phone: +1 571.389.1304</b>
                            <br />
                            <a href="mailto:info@finntaxsolutions.com">info.finntaxs@gmail.com</a>
                        </p>
                    
                </div>
                    {/* <h3>Connect With Us</h3>
                    <a className="social read-more" href="">
                        <i className="fa fa-facebook" />
                    </a>
                    <a className="social read-more" href="">
                        <i className="fa fa-twitter" />
                    </a>
                    <a className="social read-more" href="">
                        <i className="fa fa-linkedin" />
                    </a>
                    <a className="social read-more" href="">
                        <i className="fa fa-google" />
                    </a>
                    <div className="clearfix" /> */}
                </div>
                
                <div className="clearfix" />
            </div>
        </div>
    </div>
</div>

</div>

  <Footer/>
  
</>
  )
}

export default ClientReview