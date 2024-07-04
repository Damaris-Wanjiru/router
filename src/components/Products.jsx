import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

const Products = () => {
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   useEffect(() =>{
    const fetchProducts = async() => {
        try {
            const response = await axios.get("https://dummyjson.com/products") 
            
            setProducts(response.data.products)
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
    }
    fetchProducts()
   },[])
  
   if (loading) return <h1 className="display-6">Loading...</h1>;
  if (error) return <h1 className="display-6">Error: {error}</h1>;

  return (
    <div>
      <NavBar />
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;