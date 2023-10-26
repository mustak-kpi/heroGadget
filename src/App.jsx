import React, { createContext, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";
import Modal from "./components/Cards/Model";




export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  let [isOpen, setIsOpen] = useState(false)
  const { dataArray, products } = useLoaderData();
  const [cart , setCart] = useState(dataArray)
 
  const cartArry = sessionStorage.getItem('alert')
  if(cart.length > 0 && cartArry !== 'true'){
  //  alert('add to products')
  setIsOpen(true)
  sessionStorage.setItem('alert', true)
  }
  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={[cart , setCart]}>
        <Header></Header>
        <div className="md:min-h-[calc(100vh-341px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};

export default App;
