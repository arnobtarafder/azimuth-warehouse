import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import { Helmet } from 'react-helmet-async';



const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleAddProduct = (e) => {
    e.preventDefault();
    const product_name = e.target.name.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const email = e.target.email.value;
    // const supplier = e.target.supplier_name.value;
    const card = {
      product_name,
      image,
      description,
      price,
      quantity,
      // supplier,
      email,
    };

    fetch("https://enigmatic-eyrie-33917.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Added product successfully");
        // console.log(data);
      });
    e.target.reset();
  };


  return (
    <div className="w-100">
      <Helmet>
        <title>Add Item | Azimuth Warehouse</title>
      </Helmet>

      <div className="my-4 h-75 bg-white p-5 mx-auto rounded form-container-div shadow">
        <h2 className="text-4xl px-4">Add a new item</h2>
        <form onSubmit={handleAddProduct} className="mt-0 py-5">
          <input
            required
            name="email"
            className="input-lg mx-auto d-block form-control  border rounded w-100 pe-1 py-2 mb-3"
            value={user?.email}
            readOnly
            type="email"
          />
          <input
            required
            name="supplyar_name"
            className=" mx-auto d-block form-control border rounded w-100 pe-1 py-2 mb-3"
            value={user?.displayName}
            type="text"
            readOnly
          />
          <input
            required
            name="name"
            className=" mx-auto d-block form-control  border rounded w-100 pe-1 py-2 mb-3"
            placeholder="Product name"
            type="text"
          />

          <input
            required
            className=" mx-auto d-block form-control  border rounded w-100 pe-1 py-2 mb-3"
            placeholder="Image URL"
            type="text"
            name="image"
          />

          <div className="my-4">
            <textarea
              id="about"
              name="description"
              rows="4"
              className="shadow-sm d-block form-control  mt-2 py-2 pe-1 mb-4 block  mx-auto rounded-3 border"
              placeholder="Product Description"
            ></textarea>
          </div>

          <input
            required
            name="price"
            className=" mx-auto d-block form-control  border rounded w-100 pe-1 py-2 mb-3"
            placeholder="Price"
            type="number"
          />
          <input
            required
            name="quantity"
            className=" mx-auto d-block form-control  border rounded w-100 pe-1 py-2 mb-3"
            placeholder="Quantity"
            type="number"
          />
          <div className="flex flex-col mt-4 d-block justify-center ">
            <input
              className="cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddItem;
