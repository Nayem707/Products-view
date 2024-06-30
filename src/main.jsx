import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApi } from './features/productApiSlice';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={productsApi}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);
