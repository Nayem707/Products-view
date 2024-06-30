import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../features/productApiSlice';

const CardComponents = () => {
  const [page, setPage] = useState(1);
  const limit = 12;
  const skip = (page - 1) * limit;

  const { data, error, isError, isLoading } = useGetAllProductsQuery({
    limit,
    skip,
  });

  const columns = [
    {
      title: 'Image',
      dataIndex: 'images',
      key: 'images',
      render: (images) => (
        <img src={images[0]} alt='Product' style={{ width: 50 }} />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => (text.length > 50 ? `${text.slice(0, 50)}...` : text),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Link to={`/edit/${record.id}`}>
            <Button type='primary' style={{ marginRight: 8 }}>
              Edit
            </Button>
          </Link>
          <Link to={`/view/${record.id}`}>
            <Button>View</Button>
          </Link>
        </span>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching products: {error.message}</div>;
  }
  if (!data || !data.products) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <Table
        dataSource={data.products}
        columns={columns}
        rowKey='id'
        pagination={{
          current: page,
          pageSize: limit,
          total: data.total,
          onChange: (page) => setPage(page),
        }}
      />
    </div>
  );
};

export default CardComponents;
