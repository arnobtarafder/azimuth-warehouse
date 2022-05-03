import React from 'react';
import useProducts from '../../../hooks/useProducts';
import './Inventory.css';
import Inventory from './Inventory';

const Inventories = () => {
    const [products] = useProducts()

    return (
        <div className='row container mx-auto col-12 w-100 h-100'>

            <div className='inventory-container my-1 w-100 h-100'>
                {
                    products.map(product =>
                        <Inventory key={product._id} product={product}></Inventory>
                    )
                }
            </div>
        </div>
    );
};

export default Inventories;