import React from 'react';
import SocialLogin from '../../Authentication/SocialLogin/SocialLogin.js';
import Advantages from '../Advantages/Advantages.js';
import Banner from '../Banner/Banner.js';
import Brands from '../Brands/Brands.js';
import HomeInventories from '../HomeInventories/HomeInventories.js';

const Home = () => {
    return (
        <div>
            <Banner />

            <div className='w-25 h-25 mx-auto'>
            <SocialLogin />
            </div>

            <Advantages />

            <HomeInventories />

            <Brands />
        </div>
    );
};

export default Home;