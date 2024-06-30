import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import HomeView from './page/HomeView';
import ProductView from './page/ProductView';
import EditView from './page/EditView';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeView />} />
      <Route path='/edit/:id' element={<EditView />} />
      <Route path='/view/:id' element={<ProductView />} />
    </Route>
  )
);
