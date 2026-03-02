import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Home'
import Products from './Pages/Products '
import About from './Pages/About'
import Contact from './Pages/Contact'
import AdminDashboard from './Pages/AdminDashboard'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Services from './Pages/Services'

function App() {

const router = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/Services",
      element:<Services/>
    },
    {
      path:"/Login",
      element:<Login/>
    },
    {
      path:"/Signup",
      element:<Signup/>
    },
    {
      path:"/AdminDashboard",
      element:<AdminDashboard/>
    },
    {
      path:"/Products",
      element:<Products/>
    },
    {
      path:"/About",
      element:<About/>
    },
    {
      path:"/Contact",
      element:<Contact/>
    },
  ]
}])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
