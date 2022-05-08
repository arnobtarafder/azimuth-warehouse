import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import HomeInventory from "../../Home/HomeInventory/HomeInventory";


const MyInventory = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isReload, setIsReload] = useState(false);
  const [addProduct, setAddProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user.email;
    const getOrders = async () => {
      const email = user.email;
      const url = `https://enigmatic-eyrie-33917.herokuapp.com/addProduct?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setAddProduct(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/signIn");
        }
      }
    };
    getOrders();
  }, [user, isReload]);
  // if (addProduct.length === 0) {
  //   return (
  //     <div>
  //       <Loading></Loading>
  //     </div>
  //   );
  // }
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (!confirm) {
      return;
    }
    const url = `https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReload(!isReload);
      });
  };
  return (
    <div className="bg-white">
      <h2 className="text-center text-3xl italic text-gray-700 font-bold mt-4">
        Total added product {addProduct.length}
      </h2>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {addProduct.map((product) => (
            <HomeInventory key={product._id} product={product}>
              {" "}
              <button
                onClick={() => handleDelete(product._id)}
                className="btn btn-danger flex justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </HomeInventory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyInventory;
