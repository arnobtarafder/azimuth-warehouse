import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeInventory = ({ product, children }) => {
    const navigate = useNavigate();
    const {
        description,
        image,
        price,
        product_name,
        quantity,
        supplyar_name,
        _id,
    } = product;

    const navigateToProductDetail = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div>
            <div
                key={product._id}
                className="container col d-flex justify-content-center">
                <div className="card-container card-product-grid card-lg w-100">
                    <div className="img-wrap" data-abc={true}>
                        <img className='img-fluid w-100 h-100 image-rounded' src={product.image} alt="" />
                    </div>
                    <h4 className="title text-center">{product_name}</h4>
                    <figcaption className="info-wrap text-start">
                        <div className="row">
                            <p className="mt-1 text-lg text-gray-600 my-2">
                                {product?.description.slice(0, 100)}
                                {product?.description.length > 100 && (
                                    <span title={`${product.description}`}>...</span>
                                )}
                            </p>

                        </div>
                    </figcaption>

                    <figcaption className="info-wrap">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
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
            </div>
        </div>
    );
};

export default HomeInventory;