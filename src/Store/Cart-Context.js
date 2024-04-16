// import React from "react";

// const CartContext = React.createContext({
//     item:[],
//     totalAmount:0,
//     addItem: (item)=> {},
//     removeItem: (id) => {}
// });

// export default CartContext;


import React from 'react';

const CartContext = React.createContext({
  key: "",
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;

