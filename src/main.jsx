import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import './index.css'
import App from './App.jsx'
import Events from '../components/Events.jsx'
import EventDetails from '../components/EventDetails.jsx'

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/:eventId",
    element: <EventDetails />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


