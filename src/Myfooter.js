import React from 'react'
import './footer.css'
import Myheader from './Myheader'
export default function Myfooter() {
  return (
    <div className='bg-dark'>
      <div className='row foot mx-auto     '>
      <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 mx-auto my-0'>
        <h1 className='h1 mx-auto  text-center'>EMAIL US</h1>
        <p className='h6 mx-auto  text-center'>info@website.com</p>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 mx-auto'>
        <h1 className='h1 mx-auto text-center'>CALL US</h1>
        <p className='h6 mx-auto text-center'>(123)-456-7890</p>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 mx-auto'>
        <h1 className='h1 mx-auto text-center'>FIND US</h1>
        <p className='h6 mx-auto text-center w-50'>123Fake locatioon which dont exsists</p>
      </div>
      </div>
      <Myheader/>
    </div>
  )
}
