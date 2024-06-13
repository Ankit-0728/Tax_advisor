import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import about_img from './images/about_banner.jpg';
import profession from './images/profession.jpg';
import quality from './images/quality.jpg';
import responsiveness from './images/responsiveness.jpg';
import ourValues from './images/ourvalues.jpg';

function About() {
	return (
		<>
			<Header />
			<div id="page" className="site">
				<div id="content" className="site-content">
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
											<li className="active">Our Values</li>
										</ul>
									
								</div>
							</div>
						</div>
					</div>
					<div className="entry-content">
						<div className="container">
							<div className="boxed-content">
								<section className="wpb_row row-fluid section-padd">
									<div className="container">
										<div className="row">
											<div className="wpb_column column_container col-sm-12">
												<div className="column-inner">
													<div className="wpb_wrapper">
														<div className="section-head" >
															<h2 className="section-title linear_color">Our Values</h2>
														</div>
														<div>
															<img src={ourValues} style={{height: "275px",
    width: "364px"}} /> <span style={{position: "absolute",
		marginTop: "90px",
		fontSize: "large",
		marginLeft: "50px"}}>Our firm provides outstanding service to our clients
	because of our dedication to the three underlying
	principles of professionalism, responsiveness and
	quality.</span>
														</div>
													</div>
													<div className="wpb_wrapper" style={{marginTop:'30px'}}>
														<div className="section-head ">
															<h2 className="section-title linear_color">Professionalism</h2>
														</div>
														<div className="wpb_text_column wpb_content_element">
															<div style={{display:'flex'}}>

							
	
	<div style={{
		marginTop: "27px",
		fontSize: "large"}}>Our firm is one of the leading firms in the area. By combining our expertise, experience and the energy of our staff, each client receives close personal and professional attention.
		<br /><br/>
		Our high standards, service and specialized staff spell the difference between our outstanding performance, and other firms. We make sure that every client is served by the expertise of our whole firm.</div>
	<div>
	<img src={profession} style={{height: "250px",
    width: "900px"}} />
	</div>
															</div>
														</div>
													</div>
													<div className="wpb_wrapper" style={{marginTop:'30px'}}>
														<div className="section-head ">
															<h2 className="section-title linear_color">Responsiveness</h2>
														</div>
														<div style={{display:'flex'}}>
															<img src={responsiveness} style={{height: "450px",
    width: "364px"}} /> <div style={{
		marginTop: "50px",
		fontSize: "large",
		marginLeft: "50px"}}>Our firm is responsive. Companies who choose our firm rely on competent advice and fast, accurate personnel. We provide total financial services to individuals, large and small businesses and other agencies.<br/><br/>To see a listing of our services, please take a moment and look at our services page. Because we get new business from the people who know us best, client referrals have fueled our growth in the recent years.<br/><br/>We have earned the respect of the business and financial communities. This respect illustrates our diverse talents, dedication and ability to respond quickly.</div>
														</div>
														
													<div className="wpb_wrapper" style={{marginTop:'30px'}}>
														<div className="section-head ">
															<h2 className="section-title linear_color">Quality</h2>
														</div>
														<div className="wpb_text_column wpb_content_element">
															{/* <div className="wpb_wrapper">
																<p style={{textAlign:'justify'}}>
																	An accounting firm is known for the quality of its service. Our firm's reputation reflects the high standards we demand of ourselves.</p>
																<p style={{textAlign:'justify'}}>
																	Our primary goal as a trusted advisor is to be available and to provide insightful advice to enable our clients to make informed financial decisions. We do not accept anything less from ourselves and this is what we deliver to you.

																</p>
																<p style={{textAlign:'justify'}}>We feel it is extremely important to continually professionally educate ourselves to improve our technical expertise, financial knowledge and service to our clients.</p>
																<p style={{textAlign:'justify'}}>
																	Our high service quality and "raving fan" clients are the result of our commitment to excellence.
																</p>
																<p style={{textAlign:'justify'}}>
																	We will answer all of your questions, as they impact both your tax and financial situations. We welcome you to contact us anytime.
																</p>
															</div> */}

<div style={{display:'flex'}}>

							
	
<div style={{
	marginTop: "35px",
	fontSize: "large"}}>An accounting firm is known for the quality of its service. Our firm's reputation reflects the high standards we demand of ourselves.
	<br /><br/>Our primary goal as a trusted advisor is to be available and to provide insightful advice to enable our clients to make informed financial decisions. We do not accept anything less from ourselves and this is what we deliver to you.<br/><br/>We feel it is extremely important to continually professionally educate ourselves to improve our technical expertise, financial knowledge and service to our clients.<br/><br/>Our high service quality and "raving fan" clients are the result of our commitment to excellence.<br/><br/>We will answer all of your questions, as they impact both your tax and financial situations. We welcome you to contact us anytime.
	
	</div>
<div>
<img src={quality} style={{height: "550px",
width: "900px"}} />
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
							</div>
						</div>
					</div>
				</div>
  				<Footer />
			</div>
		</>

	)
}

export default About