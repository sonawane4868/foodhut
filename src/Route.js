import React, { Component } from 'react'
import{
    BrowserRouter,
    Routes,
    Route,
}from 'react-router-dom';
//import Mynavbar from './Mynavbar';
import Myabout from './Myabout';

export default class Route extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Mymain/>
        <Routes>
        <Route path='about' element={<Myabout/>} ></Route>
        </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}
