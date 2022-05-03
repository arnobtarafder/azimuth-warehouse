import React from 'react';
import "./Footer.module.css"


const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (

        <footer className="fixed-bottom new_footer_area d-flex flex-column min-vh-100 mt-auto">
            <div className="new_footer_top">
                <div className="container">
                    <div className="footer_bg">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 pt-5">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft" }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new templates and extensions.!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate={true} _lpchecked="1">
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage" style={{ display: "none" }}></p>
                                        <p className="mchimp-sucmessage" style={{ display: "none" }}></p>
                                    </form>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-md-6 pt-5">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft" }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term &amp; conditions</a></li>
                                        <li><a href="#">Reporting</a></li>
                                        <li><a href="#">Documentation</a></li>
                                        <li><a href="#">Support Policy</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div> */}

                            {/* <div className="col-lg-3 col-md-6 pt-5">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft" }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <a href="#" className="fab fa-facebook"></a>
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-linkedin"></a>
                                        <a href="#" className="fab fa-pinterest"></a>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>

                </div>
            </div>
            <hr />

            <h5 className='text-center pt-3 fs-6 bg-dark pb-2 mb-0'>&copy; Copyright @ {year} Azimuth-Warehouse, Proudly Created By
                <span><a className='text-decoration-none' href="https://github.com/arnobtarafder"> Arnob Tarafder</a></span>
            </h5>
        </footer>
    );
};

export default Footer;