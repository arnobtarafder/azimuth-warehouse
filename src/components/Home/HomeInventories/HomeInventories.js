import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Loading from "../../Loading/Loading"
import HomeInventory from '../HomeInventory/HomeInventory';
import './HomeInventories.css';


const HomeInventories = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();

    if (products.length == 0) {
        return (
          <div>
            <Loading></Loading>
          </div>
        );
      }

      const navigateToManageInventory = id => {
        navigate(`/manageInventory`)
    }



    return (
        <div id='products' className='products container'>
            {/* <h1 className="title">Awesome Heading</h1> */}

            <div className="row">
                <div className="products-container w-100">
                    {
                        products.slice(0, 6).map(product => (
                            <HomeInventory key={product._id} product={product}></HomeInventory>
                        ))
                    }
                </div>
            </div>
            <div className='text-center mt-5'>
                <button className='px-5 py-2 btn btn-outline-success' onClick={navigateToManageInventory} variant="outline-success">Manage Inventory</button>
            </div>
        </div>
    );
};

export default HomeInventories;