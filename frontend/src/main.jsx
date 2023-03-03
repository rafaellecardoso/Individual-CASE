import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Teste from './components/Teste'
import Sobre from './components/Sobre';
import Contato from './components/Contato';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "sobre",
    element: <Sobre/>
  },
  {
  path:"contato",
  element:<Contato/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
