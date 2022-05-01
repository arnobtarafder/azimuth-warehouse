import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({product}) => {
    const { _id, name, supplierName, picture, description, price } = product;
    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/inventory/${id}`)
    }


    return (
        <div className='service position-relative my-5 border'>
        <img className='w-100' src={picture} alt="" />
        <div className='p-3'>
            <h2>{name}</h2>
            <h5>{supplierName}</h5>
            <p>Price: {price}</p>
            <div className='pb-5 fs-5'><small>{
                description.length < 378
                    ? description
                    :
                    <div>
                        {description.slice(0, 278)}
                        <span className=''>
                            <button onClick={() => navigateToProductDetail(_id)} className='btn btn-link text-decoration-none ps-0'>
                                ...read more
                            </button>
                        </span>
                    </div>
            }</small></div>
            <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary position-absolute top-auto bottom-0'>Book Now</button>
        </div>
    </div>
    );
};

export default InventoryItem;