import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Loading from "../../Loading/Loading"
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

    const navigateToProductDetail = id => {
        navigate(`/inventory/${id}`)
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
                        products.slice(0, 6).map(product => <div
                            key={product._id}
                            className="container col d-flex justify-content-center">
                            <div className="card-container card-product-grid card-lg w-100">
                                <div className="img-wrap" data-abc={true}>
                                    <img className='img-fluid w-100 h-100 image-rounded' src={product.image} alt="" />
                                </div>
                                <figcaption className="info-wrap">
                                    <div className="row">
                                        <div className="col-md-12 col-xs-12">
                                            <h4 className="title">{product.name}</h4>
                                            <h6 className="text-left fw-lighter ps-0 pb-0">Supplier: {product.supplyar_name}</h6> </div>

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
                            </div>
                        </div>)
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