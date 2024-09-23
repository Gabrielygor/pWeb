import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'

import { App } from './App';
import { Recipe01 } from './pages/recipe-01';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/recipe1",
    element: <Recipe01 />,
  },

]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
