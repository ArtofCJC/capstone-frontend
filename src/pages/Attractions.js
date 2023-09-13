import React, { useEffect, useState } from 'react'
import { AttractionsContext } from '../context/attractionContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttractionDetails from '../components/AttractionDetails';
import bad from './images/batman-ad.jpg'
import bad2 from './images/bad2.png'
import '../index.css'

const Attractions = () => {
  const {attractions, dispatch} = AttractionsContext()
//  const [attractions, setAttractions] = useState(null)

  useEffect(() => {
    const fetchAttractions = async () => {
      const response = fetch('https://capstone-backend-0g3p.onrender.com/api/attractions/')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_ATTRACTIONS', payload: json})
      }
    }

    fetchAttractions();
  }, [dispatch])

  return (
    <div>
      <Container>
        <Row>
         

            <article className='grid-container'>

              {attractions && attractions.map(attraction =>
                <AttractionDetails attraction={attraction} key={attraction._id} />
              )}
            </article>
            <Col xs='3'>
            <div className='adspace'><img src={bad} alt='batman' style={{width:400}} /></div>
            <div className='adspace'><img src={bad2} alt='batman' style={{width:400}} /></div>
            <div className='adspace'><img src={bad} alt='batman' style={{width:400}} /></div>
            </Col>
            
        </Row>
      </Container>
    </div>
  )

};

export default Attractions