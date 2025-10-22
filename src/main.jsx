import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import Opcao from './routes/Opcao'
import Error from './routes/Error'
import Register from './routes/Register'
import Entrar from './routes/Entrar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //Esse primeiro elemento é o LAYOUT
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "opcao",
        element: <Opcao />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "entrar",
        element: <Entrar />,
      },

    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
