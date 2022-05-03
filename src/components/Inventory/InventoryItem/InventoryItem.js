import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import './InventoryItem.css'

const InventoryItem = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [furniture, setFurniture] = useState({})
    const [products] = useProducts();

    useEffect(() => {
        const url = `https://enigmatic-eyrie-33917.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFurniture(data))
    }, [id, furniture?.quantity])
    
   
    let itemQuantity = parseFloat(furniture?.quantity)
    let quantityInEveryClick = itemQuantity - 1;

    const handleDelivered = (id) => {
        const result = quantityInEveryClick--
        const quantity = result.toString()
        const output = { quantity }
        console.log(output)
        const url = `https://enigmatic-eyrie-33917.herokuapp.com/products/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(output)
        })
            .then(res => res.json())
            .then(data => {
                let updatedProduct = products.find(product => product.quantity === furniture.quantity)
                let newQuantity = result.toString()
                const newObject = { ...updatedProduct, quantity: newQuantity }
                setFurniture(newObject)
                // updatedProduct.quantity = result.toString()
                // setLaptop(updatedProduct)
                // console.log(updatedProduct)
                // console.log('success', data)
            })
    }

    const handleManageInventories = () => {
        navigate('/manageInventory')
    }



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
        const url = `https://enigmatic-eyrie-33917.herokuapp.com/products/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(output + quantity)
        })
        .then(res => res.json())
        .then(data => {
            let updatedProduct = products.find(product => product.quantity === furniture.quantity)
            // updatedProduct.quantity = quantity
            // setLaptop(updatedProduct)
            console.log('success', data)
            let newQuantity = quantity
            const newObject = { ...updatedProduct, quantity: newQuantity }
            setFurniture(newObject)
            console.log(newObject)
        })
      }

    }


    return (
        <div >
            <div className='product-info '>
                <div className="card text-center mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6 col-sm-12">
                            <img src={furniture.image} className="img-fluid rounded-start  border-bottom" alt="..." />
                            <h3 className="card-title">{furniture.title}</h3>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card-body mt-3">

                                <div className="card w-75 mx-auto text-start " style={{ "width": "18rem" }}>
                                    <div className="card-header">
                                        Name :  {furniture.title}
                                    </div>
                                    <div className="card-header">
                                        Supplied By :  {furniture.Supplier}
                                    </div>
                                    <div className="card-header">
                                        Description :
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> <small>Model: {furniture.description?.model} </small>  </li>
                                        <li className="list-group-item"> <small>Processor: {furniture.description?.processor}  </small> </li>
                                        <li className="list-group-item"> <small> Memory: {furniture.description?.memory}  </small></li>
                                        <li className="list-group-item"> <small> Storage: {furniture.description?.storage}  </small></li>
                                        <li className="list-group-item"> <small>Display: {furniture.description?.display} </small>  </li>
                                    </ul>
                                    <div className="card-header">
                                        Price : $ {furniture?.price}
                                    </div>
                                    <div className="card-header">
                                        Quantity :  {furniture?.quantity}
                                    </div>
                                    <div className="card-header">
                                        <Button onClick={() => handleDelivered(furniture._id)} variant='outline-primary'>Delivered</Button>
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