import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventoryProducts from "../../../hooks/useInventoryProducts";

const ManageInventory = () => {

    const navigate = useNavigate()
    const [products, setProducts] = useInventoryProducts()
    const handleAddInventory = () => {
        navigate('/AddInventory')
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://still-bastion-50699.herokuapp.com/laptops/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })
        }
    }
    return (
        <div>
            <div className='container  p-5 table-responsive-sm'>
                <Table className='table table-bordered  align-middle' responsive="sm">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            {/* <th>Supplied By</th> */}
                            <th>Remove Item?</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => <>
                            <tbody key={product._id}>
                                <tr>
                                    {/* <td>{product._id}</td> */}
                                    <td>{product?.title}</td>
                                    <td>{product.description?.model}</td>
                                    <td>{product?.price}</td>
                                    <td>{product?.quantity}</td>
                                    {/* <td>Table cell</td> */}
                                    <td className='d-flex justify-content-around'><Button onClick={() => handleDelete(product._id)} variant="outline-danger ">Delete</Button>

                                        <Button onClick={handleAddInventory} variant="outline-success">Add New Item</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </>
                        )
                    }
                </Table>

                {/* <Button>Add new Item</Button> */}

            </div>
        </div >
    );
};

export default ManageInventory;