import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from '../features/productApiSlice.jsx';

const EditView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  const [updateProduct] = useUpdateProductMutation();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        price: product.price,
      });
    }
  }, [product]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product: {error.message}</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct({ id, ...formData });
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Product</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>

          <input
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Product Title'
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Product Description'
          />
        </div>
        <div>
          <label>Price</label>
          <input
            name='price'
            type='number'
            value={formData.price}
            onChange={handleChange}
            placeholder='Product Price'
          />
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default EditView;
