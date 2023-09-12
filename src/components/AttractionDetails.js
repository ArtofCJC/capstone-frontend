
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AttractionDetails = ({ attraction }) => {
  return (
    <Col xs='3' className='m-0'>
      <div className="attraction-details p-3">
        <Card style={{ width: '18rem' }} className='bg-light dropShad'>

          <Card.Body>
            <Card.Header><h4>{attraction.title}</h4></Card.Header>
            <Card.Img variant="top" src={attraction.image} alt="card with attraction" />
            <Card.Text>
              <p><strong>Info: </strong>{attraction.info}</p>
            </Card.Text>
            <p><strong>Location: </strong>{attraction.location}</p>
            <Button variant="light" className='mb-3'>Chart Destination</Button>

          </Card.Body>
        </Card>
      </div>
    </Col>


  )
}

export default AttractionDetails