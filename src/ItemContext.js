import { createContext,useState,useContext } from "react";
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
    

    const handleAdd = (price) => {
   
   setTotal(total+price);
   setItem(item+1);

};

  const handleRemove = (price) => {
   //setTotal(total-price);
   if(total<=0){
    return;
   }
   setTotal((prevState)=>prevState-price);
   setItem((prevState)=>prevState-1);

  };

  const clear =() =>{
    setTotal(0);
    setItem(0);
  }


    return (
        <>
        {/* // here { one bracket is for js and another is for object } */}
        <itemContext.Provider value={{handleAdd, handleRemove, total, item,clear}}>
           {children}
        </itemContext.Provider>
        </>
    );

}

export default itemContext;
export {CustomItemContext,useValue};