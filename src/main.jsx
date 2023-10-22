import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Projects from './components/Projects/Projects'
import Career from './components/Career/Career'
import Contact from './components/Contact/Contact'
import ProjectDetails from './components/Projects/ProjectDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='/Career' element={< Career/>}/>
      <Route path='/Projects' element={<Projects />} />
      <Route path='Projects/:id' element={<ProjectDetails />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)