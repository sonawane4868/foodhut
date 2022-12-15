import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Mynavbar from './Mynavbar'
import Mycontent from './Mycontent'
import './content.css';
import './main.css'
import Myabout from './Myabout';
import Mymenu from './Mymenu';
import Mybooking from './Mybooking';
import Myevents from './Myevents';
import Myreviews from './Myreviews';
import Myfindus from './Myfindus';
import Myfooter from './Myfooter';

import Myfull from './Myfull';



export default class Main extends Component {
  render() {
    return (
      
      <div>

        <BrowserRouter>
       
        <Mynavbar/>
        
         <Routes>
         
          <Route path="/"element={ <Myfull/> }></Route> 
          <Route path="home"element={ <Mycontent/> }></Route> 
          <Route path="about"element={ <Myabout/> }></Route> 
          <Route path="gallery"element={ <Mymenu/> }></Route>
          <Route path="booking"element={ <Mybooking/> }></Route>
          <Route path="blog"element={ <Myevents/> }></Route>
          <Route path="reviews"element={ <Myreviews/> }></Route>
          <Route path="findus"element={ <Myfindus/> }></Route>
          <Route path="others"element={ <Myfooter/> }></Route>
          <Route path="full"element={ <Myfull/> }></Route>
          
         
       
        </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}
