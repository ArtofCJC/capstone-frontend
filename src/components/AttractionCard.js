import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'


const AttractionCard = () => {
    const [title, setTitle] = useState('')
    const [info, setInfo] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {image}
          <Card.Text>
            {info}
          </Card.Text>
          {location}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}

export default AttractionCard