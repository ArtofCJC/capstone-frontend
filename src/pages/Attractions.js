import React, { useEffect, useState } from 'react'
import { useAttractionsContext } from '../hooks/useAttractionContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttractionDetails from '../components/AttractionDetails';
import bad from './images/batman-ad.jpg'
import bad2 from './images/bad2.png'
import csky from './images/cincyskylineclip.png'
import '../index.css'

const Attractions = () => {
  const {attractions, dispatch} = useAttractionsContext()
//  const [attractions, setAttractions] = useState(null)

useEffect(() => {
  const fetchAttractions = async () => {
    try {
      const response = await fetch('https://capstone-backend-0g3p.onrender.com/api/attractions/');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      dispatch({ type: 'SET_ATTRACTIONS', payload: json });
    } catch (error) {
      console.error('Error fetching attractions:', error);
    }
  };

  fetchAttractions();
  }, [dispatch])

  return (
    <div>
    <div class="row">
            <div class="col">
                <div class="title-section dropShad cardbg container container-fluid">
            <img src={csky} alt='skyline' className='cotainer container-fluid imgbrdrnd'/>
                    <h1 className='header-logo' style={{ color: "white"}}>Cincinnati Attractions</h1>
                    
                </div>
            </div>
        </div>
      <Container>
        <Row>
         

            <article className='grid-container'>

              {attractions && attractions.map(attraction =>
                <AttractionDetails attraction={attraction} key={attraction._id} />
              )}
            </article>
            <Col xs='3'>
            <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/batman-ad.png?raw=true' alt='batman' style={{width:400}} /></div>
            <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/bad2.png?raw=true' alt='batman' style={{width:400}} /></div>
            <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/batman-ad.png?raw=true' alt='batman' style={{width:400}} /></div>
           
            </Col>
            
        </Row>
      </Container>
    </div>
  )

};

export default Attractions