import React from 'react';
import useProducts from '../../../hooks/useProducts';
import './Inventory.css';
import Inventory from './Inventory';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Footer/Footer';


const Inventories = () => {
    const [products] = useProducts()

    return (
        <section>
            <div className='row container mx-auto col-12 w-100 h-100 mb-5'>
            <Helmet>
                <title>Inventories | Azimuth Warehouse</title>
            </Helmet>

            <div className='inventory-container my-1 w-100 h-100'>
                {
                    products.map(product =>
                        <Inventory key={product._id} product={product}></Inventory>
                    )
                }
            </div>
        </div>

        <Footer />
        </section>
    );
};

export default Inventories;