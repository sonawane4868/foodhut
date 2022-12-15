import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import Mynav from './Mynav';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Mycontent from './Mycontent';




export default function Mynavbar() {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
    <Navbar  expand="lg" className='custom-navbar affix-top fixed-top navbar-dark bg-opacity-10' data-spy='affix' data-aos="fade-up"
     data-aos-duration="1000"  >
      <Container fluid>
      <Navbar.Brand href="#"><img src='././pngegg.png' className='img-logo'   data-aos="fade-right"
     data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-delay="1000"
    /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 px-5 mx-auto fonts"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="home" className='fs-2 p-4 fonts'>Home</Link>
            <Link to="about" className='fs-2 p-4 fonts'>About</Link>
            <Link to="gallery"className='fs-2 p-4 fonts'>Gallery</Link>
            <Link to="booking"className='fs-2 p-4 fonts'>Book-table</Link>
            <Link to="blog"className='fs-2 p-4 fonts'>Blog</Link>
            <Link to="reviews"className='fs-2 p-4 fonts'>Review</Link>
            <Link to="findus"className='fs-2 p-4 fonts'>Contact us</Link>
            <Link to="others"className='fs-2 p-4 fonts'>Others</Link>
            
            
           
          </Nav>
          <Nav>
            <Link to="full">
          <button className='btn btn-f d-none d-sm-block  d-md-block  d-lg-block'  data-aos="fade-left"
     data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-delay="1000">View all</button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    npm      
    </div>
  )
}
