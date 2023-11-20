import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  user: {} || null,
};

const redux = createSlice({
  name: "state",
  initialState,
  reducers: {
    addToCart: (state: any, { payload }) => {
      let check = state.cart.findIndex((el: any) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].QTY += 1;
      } else {
        const data = {
          ...payload,
          QTY: 1,
        };
        state.cart.push(data);
      }

      //
    },

    removeFromCart: (state: any, { payload }) => {
      state.cart = state.cart.filter((el: any) => el._id !== payload._id);
    },

    emptyCart: (state: any) => {
      state.cart = [];
    },

    removeQTYfromCart: (state: any, { payload }) => {
      let check = state.cart.findIndex((el: any) => el._id === payload._id);

      if (state.cart[check].QTY > 1) {
        state.cart[check].QTY -= 1;
      } else if (state.cart[check].QTY === 1) {
        state.cart = state.cart.filter((el: any) => el._id !== payload._id);
      }
    },

    mainUser: (state: any, { payload }) => {
      state.user = payload;
    },
    logOut: (state: any) => {
      state.user = null;
    },
  },
});

export const {
  addToCart,
  removeQTYfromCart,
  removeFromCart,
  emptyCart,
  mainUser,
  logOut,
} = redux.actions;

export default redux.reducer;
