import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
// import useInventoryProducts from '../../../Hooks/useInventoryProducts';

import './InventoryItem.css'

const InventoryItem = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [laptop, setLaptop] = useState({})
    const [delivered, setDelivered] = useState({})

    useEffect(() => {
        const url = `https://still-bastion-50699.herokuapp.com/laptops/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLaptop(data))
    }, [id])
    
    let itemQuantity = parseInt(laptop?.quantity)
    let newQuantity = itemQuantity - 1;
    const handleDelivered = (event) => {
        event.preventDefault();

        const quantity = event.target.quantity.value;
        if(!quantity || quantity < 0) {
            return;
        }

        // itemQuantity = newQuantity--
        // console.log(itemQuantity)
        const url = `http://localhost:5000/products/${id}`;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                window.alert("Qantity added")
                window.location.reload();
            })

    }

    const handleManageInventories = () => {
        navigate('/manageInventory')
    }

    let quantity = parseInt(laptop?.quantity);

    const handleRestock = () => {
        const quantity = window.prompt("Enter the quantity", "")
        const output = { quantity }
        console.log(output)

        if (isNaN(quantity) === true) {
            window.alert("please enter value")
        }

        if(!quantity || quantity < 0 || quantity === 0) {
            window.alert("please enter a valid value")
        }

      else{
        const url = `https://still-bastion-50699.herokuapp.com/laptops/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(output + quantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                window.location.reload();
            })
      }

    }



    return (
        <div >
            <div className='product-info '>
                <div className="card text-center mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12">
                            <img src={laptop.img} className="img-fluid rounded-start  border-bottom" alt="..." />
                            <h3 className="card-title">{laptop.title}</h3>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card-body mt-3">

                                <div className="card w-75 mx-auto text-start " style={{ "width": "18rem" }}>
                                    <div className="card-header">
                                        Name :  {laptop.title}
                                    </div>
                                    <div className="card-header">
                                        Supplied By :  {laptop.Supplier}
                                    </div>
                                    <div className="card-header">
                                        Description :
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> <small>Model: {laptop.description?.model} </small>  </li>
                                        <li className="list-group-item"> <small>Processor: {laptop.description?.processor}  </small> </li>
                                        <li className="list-group-item"> <small> Memory: {laptop.description?.memory}  </small></li>
                                        <li className="list-group-item"> <small> Storage: {laptop.description?.storage}  </small></li>
                                        <li className="list-group-item"> <small>Display: {laptop.description?.display} </small>  </li>
                                    </ul>
                                    <div className="card-header">
                                        Price : $ {laptop.price}
                                    </div>
                                    <div className="card-header">
                                        Quantity :  {laptop.quantity}
                                    </div>
                                    <div className="card-header">
                                        {/* <Button onClick={handleDelivered} variant='outline-primary'>Delivered</Button> */}
                                        <form onSubmit={handleDelivered}>
                                            <input type="number" name="quantity" id="" />
                                            <input type="submit" value="Submit" />
                                        </form>

                                        <Button onClick={handleRestock} variant='outline-primary px-3 mx-3'>Restock</Button>
                                    </div>
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button className='d-flex mx-auto' onClick={handleManageInventories} variant='outline-primary'> Manage Inventories</Button>
        </div >
    );
};

export default InventoryItem;