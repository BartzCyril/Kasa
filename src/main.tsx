import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import "the-new-css-reset/css/reset.css";
import {Rent} from "./components/Rent";
import {AboutUs} from "./pages/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'aboutUs',
        element: <AboutUs />,
    },
    {
        path: 'rent/:id',
        element: <Rent />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
