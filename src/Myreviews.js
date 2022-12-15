import React from 'react';
import Card from 'react-bootstrap/Card';
import './reviews.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Myreviews() {
  return (
    <section className='bg-dark mx-auto text-center'>
        <div className='me text-center mb-5'>
            <h1 className='text-center mx-auto S'>REVIEWS</h1>
        </div>
        <div className='row mx-auto text-center'>
    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 mx-auto' data-aos="flip-left" data-aos-delay="100">
    <p className=' mx-auto  w-auto h1'>Prasad S</p>
      <p className='mx-auto text-info w-auto h6'>Data analyst</p>
      <Card  style={{ width: '18rem' }} className='carddd bg-dark'>
        <Card.Header className='border border-dark'>Header</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text className='w-auto'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>


    </div>
    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 mx-auto'data-aos="flip-down" data-aos-delay="100">
    <p className=' mx-auto  w-auto h1'>Sumit G</p>
      <p className='mx-auto text-info w-auto h6'>Cyber Security </p>
      <Card style={{ width: '18rem' }}  className='carddd bg-dark'>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text className='w-auto'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>


    </div>
    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 mx-auto' data-aos="flip-right" data-aos-delay="100">
      <p className=' mx-auto  w-auto h1'>Aditya S</p>
      <p className='mx-auto text-info w-auto h6'>Web developer</p>
      <Card style={{ width: '18rem' }}  className='carddd bg-dark'>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text className='w-auto'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>


    </div>
    </div>
    </section>
  )
}
