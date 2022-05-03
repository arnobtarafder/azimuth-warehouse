import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProducts from "../../../hooks/useProducts";
import Loading from "../../Loading/Loading"

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
      const url = "https://enigmatic-eyrie-33917.herokuapp.com/products";
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [isReload]);
    // console.log(products);
    if (products.length === 0) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure?')

        if(!confirm) {
            return;
        }

        else {
            const url = `https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Successfully has deleted the item")
                    setIsReload(!isReload);
                })
        }
    }

    const handleAddInventory = () => {
        navigate("/addItem")
    }

    return (
        <div>
            <div className='container  p-5 table-responsive-sm'>
                <Table className='table table-bordered  align-middle' responsive="sm">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Supplier</th>
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
                                    <td>{product?.product_name}</td>
                                    <td>{product?.supplyar_name}</td>
                                    <td>{product?.price}</td>
                                    <td>{product?.quantity}</td>
                                    {/* <td>Table cell</td> */}
                                    <td className='d-flex justify-content-around'><Button onClick={() => handleDelete(product._id)} variant="outline-danger ">Delete</Button>

                                    </td>
                                </tr>
                            </tbody>
                        </>
                        )
                    }
                </Table>

                <div className='text-center mt-5'>
                    <Button className='px-5 py-2' onClick={handleAddInventory} variant="outline-success">Add New Item</Button>
                </div>
            </div>

            <ToastContainer />
        </div >
    );
};

export default ManageInventory;