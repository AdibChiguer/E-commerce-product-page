import React , { createContext, useContext, useState , useEffect} from "react";

const ShoppingCartContext = createContext({});

const initCartItems = localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : [] ;

const ShoppingCartProvider = ({ children }) => {
  const [cartItems , setCartitems] = useState(initCartItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart" , JSON.stringify(cartItems))
  } , [cartItems])

  const addToCart = (id , quantity) => {
    setCartitems((currentItems) => {
      if(currentItems.find(item => item.id === id) == null){
        return [...currentItems , {id , quantity}]
      }else{
        return currentItems.map((item) => {
          if(item.id === id){
            return 	{...item, quantity} //??
          }else {
            return item
          }
        })
      }
    })
  }
  const remove = (id) => {
    setCartitems((currentItems) => currentItems.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCartContext.Provider value={{ cartItems , addToCart , remove}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}


export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}