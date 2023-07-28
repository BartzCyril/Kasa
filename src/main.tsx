import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import "the-new-css-reset/css/reset.css";
import "./css/style.css"
import {Rent} from "./pages/Rent";
import {AboutUs} from "./pages/AboutUs";

const router = createBrowserRouter([
    {
        path: 'https://bartzcyril.github.io/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'https://bartzcyril.github.io/aboutUs',
        element: <AboutUs />,
    },
    {
        path: 'https://bartzcyril.github.io/rent/:id',
        element: <Rent />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
