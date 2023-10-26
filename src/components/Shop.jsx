import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addtoDB } from '../Utils/fackDB';
import { CartContext, ProductsContext } from '../App';
import toast from 'react-hot-toast';

const Shop = () => {
    // const products = useLoaderData(us);
    const products = useContext(ProductsContext);
    const [cart , setCart] =useContext(CartContext)
    console.log(products)
    const handleaddtocart = (product)=>{
        let newCart = [];
        const exists = cart.find(
            existingProduct => existingProduct.id === product.id
          )
          if(!exists){
            product.quantity = 1
            newCart = [...cart, product]
          }else {
            const rest = cart.filter(
              existingProduct => existingProduct.id !== product.id
            )
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }
            setCart(newCart)
        addtoDB(product.id)
        toast.success('Product Added! 🛒', { autoClose: 500 })
    }
    return (
        <div className='product-container'>
            {
                products.map(product =>  <ProductCard
                     key={product.id}
                     product={product}
                     handleaddtocart={handleaddtocart}
                     ></ProductCard>)
            }
        </div>
    );
};

export default Shop;