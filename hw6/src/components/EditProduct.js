import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './store';

const EditProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({
      id: product.id,
      name,
      description,
      price: parseFloat(price),
      available
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label>
        Available:
        <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
      </label>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
