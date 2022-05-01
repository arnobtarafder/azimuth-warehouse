import React from 'react';
import SocialLogin from '../../Authentication/SocialLogin/SocialLogin.js';
import Banner from '../Banner/Banner.js';
import InventoryItems from '../InventoryItems/InventoryItems.js';

const Home = () => {
    return (
        <div>
            <Banner />

            <div className='w-25 h-25 mx-auto'>
            <SocialLogin />
            </div>

            <InventoryItems />
        </div>
    );
};

export default Home;