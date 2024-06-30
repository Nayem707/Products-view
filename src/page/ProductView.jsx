import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../features/productApiSlice';

import { Card } from 'antd';
const { Meta } = Card;

const ProductView = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product: {error.message}</div>;

  return (
    <Card
      style={cardStyle}
      cover={<img alt={product.images} src={product.images[2]} />}
    >
      <Meta title={product.title} description={product.description} />
    </Card>
  );
};

export default ProductView;

const cardStyle = {
  width: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
};
