import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART

  const addToCart = (product) => {

    const existingItem =
      cartItems.find(
        (item) => item.id === product.id
      );

    if (existingItem) {

      const updatedCart =
        cartItems.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }

            : item
        );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  };

  // REMOVE ITEM

  const removeFromCart = (id) => {

    const updatedCart =
      cartItems.filter(
        (item) => item.id !== id
      );

    setCartItems(updatedCart);
  };

  // INCREASE QUANTITY

  const increaseQuantity = (id) => {

    const updatedCart =
      cartItems.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1
            }

          : item
      );

    setCartItems(updatedCart);
  };

  // DECREASE QUANTITY

  const decreaseQuantity = (id) => {

    const updatedCart =
      cartItems.map((item) =>

        item.id === id &&
        item.quantity > 1

          ? {
              ...item,
              quantity:
                item.quantity - 1
            }

          : item
      );

    setCartItems(updatedCart);
  };

  // CLEAR CART

  const clearCart = () => {
    setCartItems([]);
  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
      }}
    >

      {children}

    </CartContext.Provider>
  );
}

export default CartProvider;