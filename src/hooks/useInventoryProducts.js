import { useEffect, useState } from "react"

const useInventoryProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch("https://still-bastion-50699.herokuapp.com/laptops")
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    return [products, setProducts]
}

export default useInventoryProducts;