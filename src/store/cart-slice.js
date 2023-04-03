import { createSlice } from "@reduxjs/toolkit";

const setCartListFunc = (items, totalQuantity, totalAmount) => {
  localStorage.setItem("cartList", JSON.stringify(items));
  localStorage.setItem("cartTotal", totalAmount);
  localStorage.setItem("cartQuantity", totalQuantity);
};

const cartList = JSON.parse(localStorage.getItem("cartList"));

const itemsStorage = localStorage.getItem("cartList")
  ? JSON.parse(localStorage.getItem("cartList"))
  : [];

let t = [];
let subTotal = 0;

if (cartList) {
  cartList.forEach((item) => t.push(item.cart_quantity * item.price));
  subTotal = t.reduce((a, b) => a + b, 0);
}
const totalAmountStorage = subTotal;

// if (cartList) {
//   let total = cartList.length;
//   console.log(total);
// }
const totalQuantityStorage = cartList && cartList.length ? cartList.length : 0;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: itemsStorage,
    totalQuantity: totalQuantityStorage,
    subTotalPrice: totalAmountStorage,
  },

  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      let existingItem = state.items.find((item) => item.id === newItem.id);

      // check if new cart quantity is in limits (1 and max quantity)
      if (newItem.cart_quantity > newItem.quantity) {
        newItem.cart_quantity = newItem.quantity;
      } else if (newItem.cart_quantity < 0) {
        newItem.cart_quantity = 1;
      }
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 5,
          totalPrice: newItem.price,
          name: newItem.title,
          image: newItem.image,
          cart_quantity: newItem.cart_quantity, // actual cart quantity
        });
        let t = [];
        state.items.forEach((item) => t.push(item.cart_quantity * item.price));
        let subTotal = t.reduce((a, b) => a + b, 0);
        console.log(subTotal);
        state.subTotalPrice = subTotal;
      } else {
        existingItem.cart_quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.subTotalPrice = state.subTotalPrice + existingItem.price;
      }
      setCartListFunc(state.items, state.totalQuantity, state.subTotalPrice);
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.items.length - 1;
      state.subTotalPrice = state.subTotalPrice - existingItem.price;
      if (existingItem.cart_quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.cart_quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

// const productDetails = createSlice({
//   name: "product",
//   initialState: { items: [], totalQuantity: 0, subTotalPrice: 0 },
//   reducers: {
//     productDetails(state, action) {},
//   },
// });

export const cartActions = cartSlice.actions;

export default cartSlice;
