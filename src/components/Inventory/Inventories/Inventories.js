import React from 'react';
import useInventoryProducts from '../../../hooks/useInventoryProducts';
// import './Inventory.css';
import Inventory from './Inventory';

const Inventories = () => {
    const [products] = useInventoryProducts()

    return (
        <div className='row container mx-auto col-12 w-100 h-100'>

            <div className='inventory-container my-1 w-100 h-100'>
                {
                    products.map(pd =>
                        <Inventory key={pd._id} product={pd}></Inventory>
                    )
                }
            </div>
        </div>
    );
};

export default Inventories;