const AttractionDetails = ({ attraction }) => {

    return (
      <div className="attraction-details">
        <h4>{attraction.title}</h4>
        <p><strong>Info: </strong>{attraction.info}</p>
        <p><strong>Location: </strong>{attraction.location}</p>
        <img src={attraction.image} alt="card with attraction"/>
        {/* <p>{attraction.createdAt}</p> */}
      </div>
    )
  }
  
  export default AttractionDetails