import {Component} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'


const AttractionLayout = () => {
    const [title, setTitle] = useState('')
    const [info, setInfo] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{setTitle=title}</Card.Title>
          {image}
          <Card.Text>
            {info}
          </Card.Text>
          {location}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
   
};

class AttractionCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      attractions: []
    }
  }


componentDidMount(){
  axios.get("localhost:400/attractions/")
  .then(response => {
    this.setState({ attractions: response.data })
  })
  .catch((error) => {
    console.log(error)
  })
};



AttractionCard(){
  return this.state.attractions.map(attractions =>{
    return <AttractionCard attractions={attractions} key={attractions._id}/>
  })
}

render(){
  return(
    <div>
      {this.AttractionCard()}
    </div>
  )
}

};

export default {AttractionCard}