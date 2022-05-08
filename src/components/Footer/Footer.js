import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import './Footer.css';


const Footer = () => {
  const [user] = useAuthState(auth);
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget company-intro-widget">
                <a href="index.html" className="site-logo">
                  <img className="footer-logo-image" src="https://cdn-icons-png.flaticon.com/128/7142/7142160.png" alt="logo" />
                </a>
                <h1 className="text-white fs-1">Azimuth Warehouse</h1>
                <ul className=" footer-unorder-list company-footer-contact-list">
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget furniture-links-widget text-start">
                <h5 className="widget-title text-decoration-underline">Popular Furnitures</h5>
                <ul className=" footer-unorder-list furnitures-link-list">
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Bedroom</a></li>
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Dining Room</a></li>
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Drawing Room</a></li>
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Kitchen</a></li>
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Bathroom Fitings</a></li>
                  <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Store Room</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget latest-news-widget">
                <h5 className="widget-title text-decoration-underline">lastest news</h5>
                <ul className=" footer-unorder-list small-post-list">
                  <li>
                    <div className="small-post-item">
                      <a href="#" className="post-date">July 18, {year}</a>
                      <h6 className="small-post-title"><a href="#">We are opening our new branch at Gulshan.</a></h6>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <a href="#" className="post-date">August 11, {year}</a>
                      <h6 className="small-post-title"><a href="#">We are going to open 100+ outlets in Dhaka</a></h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget newsletter-widget">
                <h5 className="widget-title text-decoration-underline">Newsletter</h5>
                <div className="footer-newsletter">
                  <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                  <form className="news-letter-form">
                    <input type="email" name="news-email" id="news-email" value={user?.email} readOnly />
                    <textarea placeholder="What You Want To Email Us!" className="form-control" cols="30" rows="5"></textarea>

                    <input type="submit" value="Send" />
                  </form>
                </div>
              </div>
            </div>=
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-sm-left text-center">
              <span className="copy-right-text">© {year} <a href="https://github.com/arnobtarafder">Arnob Tarafder</a> All Rights Reserved.</span>
            </div>
            <div className="col-md-6 col-sm-6">
              <ul className=" footer-unorder-list terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>=
    </footer>
  );
};

export default Footer;




