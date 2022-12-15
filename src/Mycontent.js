import React from 'react'
import './content.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Mycontent() {
  return (
    
    <div className='row'>
    <div className='jumbotron jumbotron-fluid content  bg-transparent text-center mx-auto'>
    <div className='container col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto'>
      <p className='display-4 text-center text-white font-weight-bold font mx-auto ' data-aos="zoom-in" data-aos-delay="1650">FOODHUT</p>
      <p className='lead text-center text-white mx-auto' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="1800"
     data-aos-offset="0">Always Fresh & Delightfull.</p>
      <button className='btn btn-primary text-center my-5 'data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="1900"
     data-aos-offset="0">View our gallery</button>
    </div>
  </div>
  </div>
    
  )
}
