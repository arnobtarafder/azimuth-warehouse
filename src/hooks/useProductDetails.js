import { useEffect, useState } from "react"

const useProductDetails = (productId) => {
    const [productDetails, setProductDetails] = useState({});


    useEffect(() => {
        const url = `https://still-bastion-50699.herokuapp.com/laptops/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProductDetails(data))    
    }, [productId])

    return[productDetails]
}

export default useProductDetails;