import { getlocationstroge } from "../../Utils/fackDB";
 
export const getproductsdata = async ()=>{
    const productsCart = await fetch('products.json');
    const products = await productsCart.json();
    // console.log(products)

    const sevedCart = getlocationstroge();

    let dataArray = [];
for(const id in sevedCart){
    const foundcart = products.find(product => product.id ===id)
    if(foundcart){
        foundcart.quantity = sevedCart[id]
        dataArray.push(foundcart)
    }
}
return {dataArray, products}
}