import React from 'react';
import SocialLogin from '../../Authentication/SocialLogin/SocialLogin.js';
import Banner from '../Banner/Banner.js';
import HomeInventories from '../HomeInventories/HomeInventories.js';

const Home = () => {
    return (
        <div>
            <Banner />

            <div className='w-25 h-25 mx-auto'>
            <SocialLogin />
            </div>

            <HomeInventories />
        </div>
    );
};

export default Home;