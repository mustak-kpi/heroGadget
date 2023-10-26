import { parse } from "postcss";

// add to data location stroagea 
const addtoDB = (id)=> {

  let shoppingCart = {};

  // get localStorage itmes
   
  const stroedCart = localStorage.getItem('shopping-cart');
  if(stroedCart){
    shoppingCart = JSON.parse(stroedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id]= newQuantity;
  }
  else{
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getlocationstroge = () =>{
  let shoppingCart = {};
  const  stroedCart = localStorage.getItem('shopping-cart');
  if(stroedCart){
    shoppingCart = JSON.parse(stroedCart);
  }
  return shoppingCart
}

// remove to localstorage 
const removeToLocalStorade = (id) =>{
  const stroedCart = localStorage.getItem('shopping-cart');
  if(stroedCart){
    const shoppingCart = JSON.parse(stroedCart);
    if(id in shoppingCart){
      delete shoppingCart[id]
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
}

// clear all localstorage cart
const removeDataALL = (id)=>{
  localStorage.removeItem('shopping-cart')
}

export{
  addtoDB,
  getlocationstroge,
  removeToLocalStorade ,
  removeDataALL
}