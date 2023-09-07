import React, { useEffect, useState } from 'react'

import AttractionDetails from '../components/AttractionDetails';


const Attractions = () => {
    // const [title, setTitle] = useState('')
    // const [info, setInfo] = useState('')
    // const [location, setLocation] = useState('')
    // const [image, setImage] = useState('')
    const [attractions, setAttractions] = useState(null)

    useEffect(() => {
      const fetchAttractions = async () => {
        const response = await fetch('http://localhost:4000/api/attractions')
        const json = await response.json()

        if (response.ok) {
          // setTitle(json)
          // setInfo(json)
          // setLocation(json)
          // setImage(json)
          setAttractions(json)
        }
      }

      fetchAttractions();
    }, [])

    return (
      <div>
        <div>
      {attractions && attractions.map(attraction =>
          <AttractionDetails attraction={attraction} key={attraction._id}/>
          )}
        </div>
      </div>
    )
   
};

export default Attractions