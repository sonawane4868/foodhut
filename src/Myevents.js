import React from 'react';
import './events.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Myevents() {
  return (
    <section className='bg-dark'>
    <div className='bg-dark me text-center'>
      <h1 className='text-center mx-auto py-5'>EVENT AT FOOD HUT</h1>
    </div>
      <div className='row text-center mx-auto '>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      <Card.Img variant="top" src="././blog-3.jpg" />
      <Card.Body className='bg-dark border border-white border-top-0 '>
        <Card.Title className='text-white cardtitle'>Dish item1</Card.Title>
        <Card.Text className='text-white w-auto cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='w-50 '>$22</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-up">
        <Card style={{ width: '18rem' }} className='border border-0 border-light w-100 cardd'>
      <Card.Img variant="top" src="././blog-1.jpg" />
      <Card.Body className='bg-dark border border-white border-top-0 '>
        <Card.Title className='text-white cardtitle'>Dish item2</Card.Title>
        <Card.Text className='text-white w-auto cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='w-50 '>$40</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-right">
        <Card style={{ width: '18rem' }} className='border border-0 border-light w-100 cardd'>
      <Card.Img variant="top" src="././blog-2.jpg" />
      <Card.Body className='bg-dark border border-white border-top-0 '>
        <Card.Title className='text-white cardtitle'>Dish item3</Card.Title>
        <Card.Text className='text-white w-auto cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='w-50 '>$56</Button>
      </Card.Body>
    </Card>
        </div>
        </div>
        <div className='row text-center mx-auto my-5'>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto'data-aos="flip-left" data-aos-delay="300" >
        <Card style={{ width: '18rem' }} className='border border-0 border-light w-100 cardd'>
      <Card.Img variant="top" src="././blog-4.jpg" />
      <Card.Body className='bg-dark border border-white border-top-0 '>
        <Card.Title className='text-white cardtitle'>Dish item1</Card.Title>
        <Card.Text className='text-white w-auto cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='w-50 '>$22</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-down" data-aos-delay="300">
        <Card style={{ width: '18rem' }} className='border border-0 border-light w-100 cardd'>
      <Card.Img variant="top" src="././blog-5.jpg" />
      <Card.Body className='bg-dark border border-white border-top-0 '>
        <Card.Title className='text-white cardtitle'>Dish item2</Card.Title>
        <Card.Text className='text-white w-auto cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='w-50 '>$40</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-right" data-aos-delay="300">
        <Card style={{ width: '18rem' }} className='border border-0 border-light w-100 cardd'>
      <Card.Img variant="top" src="././blog-6.jpg" />
      <Card.Body className='bg-dark border border-white border-top-0 '>
        <Card.Title className='text-white cardtitle'>Dish item3</Card.Title>
        <Card.Text className='text-white w-auto cardtext'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='w-50 '>$56</Button>
      </Card.Body>
    </Card>
        </div>
        </div>
        
      
  
      </section>
      
   
  );
}

