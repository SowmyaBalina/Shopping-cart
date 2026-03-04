import { createContext,useState,useContext } from "react";
import CartModal from "./components/CartModal";
import React from "react";


const itemContext = createContext();

//create a custom hook to use the context
function useValue(){
    const value= useContext(itemContext);
    return value;
}

function CustomItemContext({children}){

    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart,setShowCart] = useState(false);
    const [cart,setCart] = useState([]);
    

    const handleAdd = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);
    if(index === -1){
        setCart([...cart, {...prod,qty:1}])
        console.log(cart);
        setTotal(total+prod.price);
       
    }
    else{
        cart[index].qty++;
        setCart(cart);
        setTotal(total+cart[index].price);
        console.log(cart);
    }

    setItem(item+1);
};

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if(index !== -1){
        cart[index].qty--;
        setItem(item-1);
        setTotal(total-cart[index].price);
        if(cart[index].qty == 0){
            cart.splice(index,1);
        }
    }

    
    setCart(cart);
    
   
};

  const clear =() =>{
    setTotal(0);
    setItem(0);
    setCart([]);
  }

  const toggle = () => {
     setShowCart(!showCart);
  }

    return (
        <>
        {/* // here { one bracket is for js and another is for object } */}
        <itemContext.Provider value={{handleAdd, handleRemove, total, item,clear,toggle,cart}}>
            {showCart && <CartModal /> }
           {children}
        </itemContext.Provider>
        </>
    );

}

export default itemContext;
export {CustomItemContext,useValue};