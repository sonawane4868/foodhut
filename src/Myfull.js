import React, { Component } from 'react'
import Mainclass from './Mainclass'
import Myabout from './Myabout'
import Mybooking from './Mybooking'
import Mycontent from './Mycontent'
import Myevents from './Myevents'
import Myfindus from './Myfindus'
import Myfooter from './Myfooter'
import Mymenu from './Mymenu'
import Mynavbar from './Mynavbar'
import Myreviews from './Myreviews'


export default class Myfull extends Component {
  render() {
    return (
      <div>
        
        
        <Mycontent/>
        <Myabout/>
        <Mymenu/>
        <Mybooking/>
        <Myevents/>
        <Myreviews/>
        <Myfindus/>
        <Myfooter/>
        
      </div>
    )
  }
}
