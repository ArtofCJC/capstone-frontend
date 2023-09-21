import React from 'react';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const AttractionDetails = ({ attraction }) => {
  return (
    <Col xs='3' className='m-0'>
      <div className="attraction-details p-3">
        <Card className=' dropShad cardbord'>
          <Card.Body className='cardbg cborder'>
            <Card.Header><h4 className='header-logo'>{attraction.title}</h4></Card.Header>
            <Card.Img variant="top" src={attraction.image} alt="card with attraction" />
            <Card.Text>
              <p className='header-logo'><strong>Info: </strong>{attraction.info}</p>
            </Card.Text>
            <p className='header-logo'><strong>Location: </strong>{attraction.location}</p>
            <Button variant="dark" className='mb-3 btnborder decotxt'>Chart Destination</Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  )
}

export default AttractionDetails;