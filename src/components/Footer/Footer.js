import React from "react";
import {
  AiFillLinkedin,
  AiOutlineDribbble,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const today = new Date();
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase">
            Company
          </h2>
          <ul className="text-gray-800">
            <li className="mb-4">
              <a href="#" className=" hover:underline">
                About
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Brand Center
              </a>
            </li>
            <li className="mb-4">
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase">
            Help center
          </h2>
          <ul className="text-gray-800">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Discord Server
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase">
            Legal
          </h2>
          <ul className="text-gray-800">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase">
            PRODUCT
          </h2>
          <ul className="text-gray-800">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Our Products
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Great Deals
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Analytics
              </a>
            </li>
            <li className="mb-4">
              <Link to="/blog" className="hover:underline">
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6 px-4 bg-gray-100 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-800 sm:text-center">
          © {today.getFullYear()} <Link to="/">Furniture warehouse</Link>. All
          Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a href="#" className="text-gray-800 hover:text-orange-500">
            <AiFillLinkedin />
          </a>
          <a href="#" className="text-gray-800 hover:text-orange-500">
            <AiOutlineDribbble />
          </a>
          <a href="#" className="text-gray-800 hover:text-orange-500">
            <AiOutlineTwitter />
          </a>
          <a href="#" className="text-gray-800 hover:text-orange-500">
            <BsFacebook />
          </a>
          <a href="#" className="text-gray-800 hover:text-orange-500">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

        const today = new Date();
        const year = today.getFullYear();
        <footer className="new_footer_area d-flex flex-column mt-auto">
            
            <h5 className='text-center pt-3 fs-6 bg-dark pb-2 mb-0'>&copy; Copyright @ {year} Azimuth-Warehouse, Proudly Created By
                <span><a className='text-decoration-none' href="https://github.com/arnobtarafder"> Arnob Tarafder</a></span>
            </h5>
        </footer>