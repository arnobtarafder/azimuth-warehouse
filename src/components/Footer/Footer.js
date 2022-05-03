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
    <footer class="footer-section">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget company-intro-widget">
              <a href="index.html" class="site-logo"><img src="https://cdn-icons-png.flaticon.com/128/7142/7142160.png" alt="logo" /></a>
              <h1 className="text-white fs-1">Azimuth Warehouse</h1>
              <ul class="company-footer-contact-list">
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget course-links-widget text-start">
              <h5 class="widget-title text-decoration-underline">Popular Furnitures</h5>
              <ul class="courses-link-list">
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Bedroom</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Dining Room</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Drawing Room</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Kitchen</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Bathroom Fitings</a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Store Room</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget latest-news-widget">
              <h5 class="widget-title text-decoration-underline">lastest news</h5>
              <ul class="small-post-list">
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">July 18, {year}</a>
                    <h6 class="small-post-title"><a href="#">We are opening our new branch at Gulshan.</a></h6>
                  </div>
                </li>
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">August 11, {year}</a>
                    <h6 class="small-post-title"><a href="#">We are going to open 100+ outlets in Dhaka</a></h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget newsletter-widget">
              <h5 class="widget-title text-decoration-underline">Newsletter</h5>
              <div class="footer-newsletter">
                <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                <form class="news-letter-form">
                  <input type="email" name="news-email" id="news-email" value={user?.email} readOnly/>
                  <textarea placeholder="What You Want To Email Us!" className="form-control" cols="30" rows="5"></textarea>

                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>=
        </div>
      </div> 
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6 text-sm-left text-center">
              <span class="copy-right-text">© {year} <a href="https://github.com/arnobtarafder">Arnob Tarafder</a> All Rights Reserved.</span>
            </div>
            <div class="col-md-6 col-sm-6">
              <ul class="terms-privacy d-flex justify-content-sm-end justify-content-center">
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




