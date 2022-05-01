import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventoryItems from '../../../hooks/useInventoryItems';
import './InventoryItems.css';


const InventoryItems = () => {
    const [products, setProducts] = useInventoryItems();
    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/inventory/${id}`)
    }


    return (
        <div id='products' className='products container'>
            {/* <h1 className="title">Awesome Heading</h1> */}

            <div className="row">
                <div className="products-container">
                    {
                        products.slice(0, 6).map(product => <div className="container d-flex justify-content-center">
                            <figure className="card-container card-product-grid card-lg"> 
                            <div className="img-wrap" data-abc={true}> 
                            <img className='img-fluid w-100 h-100 image-rounded' src={product.picture} alt=""/>
                            </div>
                                <figcaption className="info-wrap">
                                    <div className="row">
                                        <div className="col-md-12 col-xs-12">
                                            <h4 className="title">{product.name}</h4>
                                            <h6 className="text-left fw-lighter ps-0 pb-0">Supplier: {product.supplierName}</h6> </div>

                                    </div>
                                </figcaption>
                                <div className="bottom-wrap-payment">
                                    <figcaption className="info-wrap">
                                        <div className="row">
                                        <div className="col-md-6 col-xs-6">
                                                <div className="text-left"> Quantity: {product.quantity}</div>
                                            </div>
                                            <div className="col-md-6 col-xs-6">
                                                <div className="text-right"> Price: {product.price}</div>
                                            </div>
                                        </div>
                                    </figcaption>
                                </div>
                                <div className="bottom-wrap text-center"> <button onClick={() => navigateToProductDetail(product?._id)} className="btn btn-primary" data-abc={true}> Manage </button>
                                </div>
                            </figure>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;
