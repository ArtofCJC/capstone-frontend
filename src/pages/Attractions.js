import React, { useEffect, useState } from 'react'
import AttractionCard from './components/AttractionCard'
import citySkyline from './images/citySL.jpg'
import ballpark from './images/gabp.jpg'
import jLHQ from './images/justiceleaguehq.jpg'
import oTR from './images/otr.jpg'

const Attractions = () => {
  const [attractions, setAttractions] = useState(null)

  useEffect(() => {
    const fetchAttractions = async () => {
      const response = await fetch('http://localhost:4000/api/attractions')
      const json = await response.json()

      if (response.ok) {
        setAttractions(json)
      }
    }

    fetchAttractions()
  }, []) 


  return (
    
<AttractionCard>
  <AttractionCard.Item>{attractions && attractions.map((attraction) => (
    <p key={attraction._id}>{attraction.title}</p>,
    <p key={attraction._id}>{attraction.image}</p>,
    <p key={attraction._id}>{attraction.info}</p>,
    <p key={attraction._id}>{attraction.location}</p>
    
  ))}</AttractionCard.Item>
</AttractionCard>

  )
}

export default Attractions





{/* <div className="container p-5">
        <h1>Over The Rhine</h1>
        <div className="cardcontainer p-5">
            <div className="photo">
            <img src={oTR} /></div>
            
            <div class="contents">
                <p class="txt4">Over The Rhine In Cincinnati</p>
                <p class="txt5">The historical art district</p>
                <p class="txt2">OTR is a historic district and one of the largest and most intact urban historic districts in the United States. 
 It's known for its shopping, with a variety of boutiques and specialty stores. </p>
            </div>
            <div className='footer'>
                <p><a class="waves-effect waves-light btn" href="#">Read More</a><a id="heart"><span class="like"><i class="fab fa-gratipay"></i>Like</span></a></p>
                <p class="txt3"><i class="far fa-clock"></i>10 Minutes Ago <span class="comments"><i class="fas fa-comments"></i>45 Comments</span></p>
            </div>
            </div>
        </div> */}