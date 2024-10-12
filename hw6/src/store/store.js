// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Начальное состояние для продуктов
const initialState = {
  products: []
};

// Создаем слайс для продуктов
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, name, description, price, available } = action.payload;
      const existingProduct = state.products.find(product => product.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.description = description;
        existingProduct.price = price;
        existingProduct.available = available;
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    }
  }
});

export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer
  }
});

export default store;
