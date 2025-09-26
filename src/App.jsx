import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFoods from './components/SeaFood/SeaFoods'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import Process from './components/Process/Process'


const App = () => {
 
  const router=createBrowserRouter([
    {
      
      path:'/',
      element:<Layout/>,
      children:[
    {
      
      path:'/',
      element:<Home/>
    },
    {
      
      path:'/fruits',
      element:<Fruits/>
    },
     {
      
      path:'/dairy',
      element:<Dairy/>
    },
    {
      
      path:'/seafood',
      element:<SeaFoods/>
    },
    {
      
      path:'/allproducts',
      element:<AllProducts/>
    },
    {
      path:'/process',
    element:<Process/>
    }
    ]},
   
    {
      path:'/about',
      element:<Layout/>,
      children:[{
         path:'/about',
      element:<About/>,
      }
        
    ]},
     {
      path:'/contact-us',
      element:<Layout/>,
      children:[{
         path:'/contact-us',
      element:<ContactUs/>,
      }
        
    ]},
        
    
            
])
    
return <RouterProvider router={router}/>
  
}

export default App
