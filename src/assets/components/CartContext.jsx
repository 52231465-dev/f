import { createContext, useState } from "react";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  // eslint-disable-next-line no-undef
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;