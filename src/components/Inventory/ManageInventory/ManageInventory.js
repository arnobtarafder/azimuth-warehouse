import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProducts from "../../../hooks/useProducts";
import Loading from "../../Loading/Loading";
import { Helmet } from 'react-helmet-async';
import "./ManageInventory.css"
import Footer from '../../Footer/Footer';
import userEvent from '@testing-library/user-event';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Swal from "sweetalert2";



const ManageInventory = () => {
    const [user] = useAuthState(auth);
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
        // const confirm = window.confirm('Do you want to delete the item?')

        // if (!confirm) {
        //     return;
        // }

        Swal.fire({
            title: "Do you want to delete the item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete It!",
          }).then((result) => {
            if (result.isConfirmed) {
              const url = `https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`;
              fetch(url, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  toast.success("The item has successfully deleted");
                  setIsReload(!isReload);
                });
            }
          });
    }

    const handleAddInventory = () => {
        navigate("/addItem")
    }

    const handleUpdate = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='container'>
            {/* <div className='container  p-5 table-responsive-sm'> */}
                <Helmet>
                    <title>Manage Inventory | Azimuth Warehouse</title>
                </Helmet>

                <div className='container mb-5'>

                    {
                        products.map(product => <div>
                            
                            <div className='card-info-container mx-auto'>
                            <div className="img">
                                <img src={product.image ? product.image : 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png'} alt="" />
                                </div>

                            <div className="card-info text-start me-auto">
                                <h3>Name : {product?.product_name}</h3>
                                <h3>Supplier : {user?.displayName}</h3>
                                <p>Price : ${product?.price} </p>
                                <p> Quantiity : {product?.quantity}</p>
                
                            </div>

                            <div className="manage-buttons ms-3">
                                <button onClick={() => handleDelete(product._id)} className='manage-delete-button'>Delete</button>
                                <button onClick={() => handleUpdate(product._id)} className='manage-update-button'>Update</button>
                            </div>
                
                        </div>
                        </div>)
                    }

                {/* </div> */}



                <div className='text-center mt-5'>
                    <Button className='px-5 py-2' onClick={handleAddInventory} variant="outline-success">Add New Item</Button>
                </div>
            </div>

            <ToastContainer />

            <Footer />
        </div >
    );
};

export default ManageInventory;



{/* <Table className='table table-bordered  align-middle' responsive="sm">
<thead>
    <tr>
        {/* <th>ID</th> */}
//         <th>Name</th>
//         <th>Supplier</th>
//         <th>Price</th>
//         <th>Quantity</th>
//         {/* <th>Supplied By</th> */}
//         <th>Manage Your Product</th>
//     </tr>
// </thead>
// {
//     products.map(product => <>
//         <tbody key={product._id}>
//             <tr>
//                 {/* <td>{product._id}</td> */}
//                 <td>{product?.product_name}</td>
//                 <td>{product?.supplyar_name}</td>
//                 <td>{product?.price}</td>
//                 <td>{product?.quantity}</td>
//                 {/* <td>Table cell</td> */}
//                 <td className='d-flex justify-content-around'><Button onClick={() => handleDelete(product._id)} variant="outline-danger ">Delete</Button>

//                 </td>
//             </tr>
//         </tbody>
//     </>
//     )
// }
// </Table> */}
