import React from 'react';
import SocialLogin from '../../Authentication/SocialLogin/SocialLogin.js';
import Advantages from '../Advantages/Advantages.js';
import Animation from '../Animation/Animation.js';
import Banner from '../Banner/Banner.js';
import Brands from '../Brands/Brands.js';
import HomeInventories from '../HomeInventories/HomeInventories.js';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Footer/Footer.js';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Azimuth Warehouse</title>
            </Helmet>

            <Banner />

            <div className='w-25 h-25 mx-auto'>
            <SocialLogin />
            </div>

            <Advantages />

            <HomeInventories />

            <Brands />

            <Animation />

            <Footer />
        </div>
    );
};

export default Home;