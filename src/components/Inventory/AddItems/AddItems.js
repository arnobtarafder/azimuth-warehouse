import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../../Loading/Loading"
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AddItems = () => {
    const [user, loading, error] = useAuthState(auth);
    
    const { register, handleSubmit } = useForm();
    
        if(loading) {
            return <Loading />
        }

    const onSubmit = data => {
        console.log(data)
        const url = `https://still-bastion-50699.herokuapp.com/laptops`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged === true) {
                    toast.success("Product added successfully")
                }
            })
    };



    return (
        <div>
            <h2 className='text-center mt-5'>Add a new item</h2>
            <form className='d-flex flex-column w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 py-2 px-3' placeholder='Name of the Product' {...register("title", { required: true, maxLength: 50 })} />
                <input className='mb-2  py-2 px-3' placeholder='Price' type="text" {...register("price")} />

                <input className='mb-2  py-2 px-3' placeholder='Quantity' type="text" {...register("quantity")} />

                <input className='mb-2  py-2 px-3' placeholder='Photo Url' type="text" {...register("img")} />

                <input className='mb-2  py-2 px-3' placeholder='Your Email' type="email" value={user?.email} {...register("email")} />
                
                <input className='mb-2 py-2 fs-5 btn btn-outline-primary' type="submit" />
            </form>

            <ToastContainer />
        </div>
    );
};

export default AddItems;