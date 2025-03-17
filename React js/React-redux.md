# 🛒 Redux Todo Store & Reducer Setup

## 📌 Setting Up Redux Store

### 1️⃣ Install Dependencies
```sh
npm install @reduxjs/toolkit react-redux
```

### 2️⃣ Create `cartSlice.js`
```jsx
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: function (state, action) {
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    removeCartItem: function (state, action) {
      state.cart = state.cart.filter((item) => item.id !== +action.payload);
    },
    incQty: function (state, action) {
      state.cart = state.cart.map((item) =>
        +item.id === +action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decQty: function (state, action) {
      state.cart = state.cart.map((item) =>
        +item.id === +action.payload
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
    },
  },
});

export const { addCart, removeCartItem, incQty, decQty } = cartSlice.actions;
export default cartSlice.reducer;

export function useCartFunction() {
  return useSelector((state) => state.cart);
}
```

### 3️⃣ Configure Store (`store.js`)
```jsx
import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
```

## 🏷️ Dispatch Actions in a Component
### Example: `Details.js`
```jsx
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { useGetProduct } from "../context/FetchAllProductContext";
import { addCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function Details() {
  let { data: product, error, loading } = useGetProduct();
  let [singleProduct, setSingleProduct] = useState([]);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const pId = searchParams.get("productId");

  function getSingleProduct() {
    setSingleProduct(product.find((item) => +item.id === +pId));
  }

  useEffect(() => {
    getSingleProduct();
  }, [product]);

  function addToCart(product) {
    dispatch(addCart(product));
    navigate("/cart");
  }

  if (loading || error) {
    return <div className="text-center text-red-500">Loading....</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Details</h2>
      <h3 className="text-xl mb-4">{singleProduct?.title}</h3>
      <button
        onClick={() => addToCart(singleProduct)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Details;

 Setup Redux in index.js

import { createRoot } from 'react-dom/client';  
import './index.css';  
import App from './App.jsx';  
import { BrowserRouter } from 'react-router-dom';  
import FetchAllProductContext from './context/FetchAllProductContext.jsx';  
import { Provider } from 'react-redux';  
import { store } from './redux/store.js';  

createRoot(document.getElementById('root')).render(  
  <BrowserRouter>  
    <Provider store={store}>  
      <FetchAllProductContext>  
        <App />  
      </FetchAllProductContext>  
    </Provider>  
  </BrowserRouter>  
);  
