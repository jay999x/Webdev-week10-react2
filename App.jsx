//import React from 'react';
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';

export default function App(){

  return  <div>
    <BrowserRouter>
    <Link to= "/">Allen</Link>
    |
    <Link to ="/class11-programs">Class11 Programs</Link>
    <Link to = "/class12-programs">Class12 Programs</Link>
    <Routes>
    <Route path = "/" element = {<Layout />} >
      <Route path ="/class11-programs" element ={<Class11Program/>} />
      <Route path = "/class12-programs" element ={<Class12Program/>} />
     </Route>
    </Routes>
    </BrowserRouter>
  </div>

}

function Class11Program(){

  return <div>
    This is Class 11 Program
  </div>
}

function Class12Program(){

  return <div>
    This is Class 12 Program
  </div>
}

function Layout(){
  return<div>

    This is the main Page
    <Outlet />
   
  </div>
}
