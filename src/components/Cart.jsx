import React, { useContext, useEffect, useState } from 'react';
import { getlocationstroge, removeDataALL, removeToLocalStorade } from '../Utils/fackDB';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { CartContext } from '../App';
import toast from 'react-hot-toast';

const Cart = () => {
    
// const {dataArray} = useLoaderData()
const [cart , setCart] = useContext(CartContext)

  let total = 0;
  if(cart.length > 0){
    for(const product of cart){
        total = total + product.price * product.quantity
    }
  }

  const removefromDB = (id) =>{
    const remaining = cart.filter(product => product.id !== id)
    setCart(remaining)
    removeToLocalStorade(id)
    return toast.success('All Items Removed! 🔥')
  }  
//   all data delet for localstorade

const removelocalstrode = ()=>{
  if(cart.length > 0){
    setCart([])
    removeDataALL()
    return toast.success('All Items Removed! 🔥')
  }
  return toast.error('Cart is empty! 🔥')
}

const Orderhendler = ()=> {
  if(cart.length > 0){
    setCart([])
    removeToLocalStorade()
  return toast.success('Order Placed! 👍');
  }
  return toast.error('Cart is empty! 🔥')
}
    return (
        <div className='flex min-h-screen justify-center items-start text-gray-900 bg-gray-100'>
           <div className='flex flex-col p-4 max-w-xl space-y-3 sm:p-10'>
                <h1 className='text-lx font-semibold'>{cart.length ?  'Reciew cart itmes' : 'Cart is EMPTY'}</h1>
                <ul className='flex flex-col divide-y divide-gray-500'>
                    {
                       cart.map(product => <CartItem
                        key={product.id}
                        product={product}
                        removefromDB = {removefromDB}
                        ></CartItem>)
                    }
                </ul>
                <div className='space-y-1 text-right'>
                   <p>total amount:<span className='font-semibold'>{total}$</span></p>
                   <p className='text-sm text-gray-400'>
                   Not including taxes and shipping costs
                   </p>
                </div>
                <div className='flex justify-end space-x-4'>
                   {cart.length > 0 ? 
                   (  <button onClick={removelocalstrode} className='btn-outlined'>clear cart</button>)  
                   
                  : ( <Link to='/shop'>
                  <button className='btn-outlined'>Back to shop</button>
                  </Link>)}
                    
                    <button onClick={Orderhendler} className='btn-primary'>place order</button>
                </div>
           </div>
        </div>
    );
};

export default Cart;