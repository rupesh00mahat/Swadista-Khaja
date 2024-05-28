import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Main from './main';
import Services from './services';
import Home from './home';
import About from './about';

const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/service', 
        element: <Services/>
      },
      {
        path: '/menu',
        element: <Main/>
      },
      {
        path: '/about',
        element: <About/>
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


