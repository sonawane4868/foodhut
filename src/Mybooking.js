import React from 'react'
import './booking.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Mybooking() {
    function btn(){
        alert("Avalibility convied on email");
    }
  return (
    <div>
      <h1 className='text-center text-white mx-auto'>BOOK A TABLE</h1>
      <div className='row text-center mx-auto ms-auto  me-auto ' data-aos="flip-up" >
      <input placeholder='EMAIL'type='email'className='col-lg-2 col-md-6 ' data-aos="flip-up"></input>
      <input placeholder='NUMBER OF GUESTS' type='number'className='col-lg-3 col-md-6 ' data-aos="flip-up"  ></input>
      <input placeholder='--|--' type='time' className='col-lg-2 col-md-6 ' data-aos="flip-up" ></input>
      <input placeholder='DD-MM-YY' type='date' className='col-lg-2 col-md-6' data-aos="flip-up" ></input>
      <button type='button' className='btn btn-primary text-center mx-auto my-5' data-aos="flip-up" data-aos-delay="600" onClick={btn}>FIND TABLE</button>
      </div>

    </div>
  )
}
