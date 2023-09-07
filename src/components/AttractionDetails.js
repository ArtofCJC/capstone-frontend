
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const AttractionDetails = ({ attraction }) => {
    return (
     
      <div className="attraction-details p-3">
      <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Header><h4>{attraction.title}</h4></Card.Header>
        <Card.Img variant="top" src={attraction.image} alt="card with attraction" />
          <Card.Text>
        <p><strong>Info: </strong>{attraction.info}</p>          
          </Card.Text>
        <p><strong>Location: </strong>{attraction.location}</p>
          <Button variant="primary" className='mb-3'>Chart Destination</Button>
         
        </Card.Body>
      </Card>
        {/* <p>{attraction.createdAt}</p> */}
       
      </div>
    )
  }
  
  export default AttractionDetails