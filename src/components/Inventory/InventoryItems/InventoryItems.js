import React from 'react';
import useInventoryItems from '../../../hooks/useInventoryItems';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'

const InventoryItems = () => {
   const [products, setProducts] = useInventoryItems()

    return (
        <div id='products' className='products container'>
            {/* <h1 class="title">Awesome Heading</h1> */}

            <div className="row">
                <h1 className='text-primary text-center mt-5'>Our products: {products.length}</h1>
                <div className="products-container">
                    {
                        products.map(product => <InventoryItem
                            key={product._id}
                            product={product}
                        >
                        </InventoryItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;
