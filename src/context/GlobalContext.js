import React, { useState, createContext } from "react";
import { images } from "./imagesPath";

const initialState = {
  shoes: [
    {
      id: 1,
      shoeName: "Nike Original 1",
      slug: "Nike-Original-1",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe1,
      count: 1,
    },
    {
      id: 2,
      shoeName: "Nike Original 2",
      slug: "Nike-Original-2",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe2,
      count: 1,
    },
    {
      id: 3,
      shoeName: "Nike Original 3",
      slug: "Nike-Original-3",
      price: 220,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe3,
      count: 1,
    },
    {
      id: 4,
      shoeName: "Nike Original 4",
      slug: "Nike-Original-4",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe4,
      count: 1,
    },
    {
      id: 5,
      shoeName: "Nike Original 5",
      slug: "Nike-Original-5",
      price: 150,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe5,
      count: 1,
    },
    {
      id: 6,
      shoeName: "Nike Original 6",
      slug: "Nike-Original-6",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe6,
      count: 1,
    },
    {
      id: 7,
      shoeName: "Nike Original 7",
      slug: "Nike-Original-7",
      price: 250,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe7,
      count: 1,
    },
    {
      id: 8,
      shoeName: "Nike Original 8",
      slug: "Nike-Original-8",
      price: 300,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe8,
      count: 1,
    },
    {
      id: 9,
      shoeName: "Nike Original 9",
      slug: "Nike-Original-9",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe9,
      count: 1,
    },
  ],
  cart: [],
};
export const ShoeDataContext = createContext(initialState);

export const GlobalContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (cartid) => {
    const { shoes } = initialState;
    // condition to stop adding items which already in cart
    const check = cartItems.every((item) => {
      return item.id !== cartid;
    });

    if (check) {
      const cartProduct = shoes.filter((shoe) => shoe.id === cartid);
      // upating state with existing item an new item
      setCartItems([...cartItems, ...cartProduct]);
    } else {
      alert("item is already added");
    }
  };

  const reduction = (productId) => {
    cartItems.forEach((item) => {
      // dencreasing count
      if (item.id === productId) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    // to get updated data
    const data = cartItems.map((item) => {
      return item;
    });
    // updating state
    setCartItems(data);
    totalAmount();
  };

  const addition = (productId) => {
    cartItems.forEach((item) => {
      // increasing count
      if (item.id === productId) {
        item.count += 1;
      }
    });
    // to get updated data
    const data = cartItems.map((item) => {
      return item;
    });
    // updating state
    setCartItems(data);
    totalAmount();
  };

  //remove Product
  const removeProuct = (productId) => {
    cartItems.forEach((item, index) => {
      // increasing count
      if (item.id === productId) {
        item.count = 1;
        cartItems.splice(index, 1);
      }
    });
    const filter = cartItems.filter((item) => item.id !== productId);
    setCartItems(filter);
    totalAmount();
  };

  //total amount
  const totalAmount = () => {
    const res = cartItems.reduce((amount, item) => {
      return amount + item.price * item.count;
    }, 0);

    setTotal(res);
  };

  //clear cart
  const clearCart = () => {
    cartItems.forEach((item) => {
      // increasing count

      item.count = 1;
    });
    setCartItems([]);
  };

  return (
    <ShoeDataContext.Provider
      value={{
        shoes: initialState.shoes,
        addToCart,
        cartItems,
        reduction,
        addition,
        removeProuct,
        total,
        totalAmount,
        clearCart,
      }}
    >
      {props.children}
    </ShoeDataContext.Provider>
  );
};
