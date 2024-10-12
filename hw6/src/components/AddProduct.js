import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/store'; 
import { v4 as uuidv4 } from 'uuid'; // Для генерации уникальных ID

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({
      id: uuidv4(),
      name,
      description,
      price: parseFloat(price),
      available
    }));
    setName('');
    setDescription('');
    setPrice('');
    setAvailable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <label>
        Available:
        <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;

