import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import { DatenschutzPage } from './components/datenschutz/DatenschutzPage'
import { ImpressumPage } from './components/impressum/ImpressumPage'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const container = document.querySelector("#root")
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "datenschutz",
    element: <DatenschutzPage/>
  },
  {
    path: "impressum",
    element: <ImpressumPage/>
  }
])

root.render(
  <RouterProvider router={router} />)

reportWebVitals();
