import React from 'react'

import citySkyline from './images/citySL.jpg'
import ballpark from './images/gabp.jpg'
import jLHQ from './images/justiceleaguehq.jpg'
import oTR from './images/otr.jpg'
import csky from './images/cincyskylineclip.png'



const About = () => {
  return (
    <div className="about-container">
    <div class="row">
            <div class="col">
                <div class="title-section dropShad cardbg container container-fluid">
            <img src={csky} alt='skyline' className='cotainer container-fluid imgbrdrnd'/>
                    <h1 className='header-logo' style={{ color: "white"}}>About Cincinnati</h1>
                    
                </div>
            </div>
        </div>
      <div className="article">
        <img src='https://cincinnatirefined.com/resources/media2/16x9/full/1015/center/80/31fd7b98-6608-4dd5-bd99-7ead206139e7-large16x9_benwright11.jpg' className='fill img dropShad' alt="City Skyline" />
      </div>
      <article>
        <div className="grid-container">
          <div className="grid-item content">
          <div>
      <div className="article">
      <img src={citySkyline} className='fill img dropShad'/>
</div>
<article>

<div className="container">
   
   <div className="about bg-dark text-light">
      <div className="left">
         <h1 className='header-logo'>History</h1>
         
         <p className='header-logo text-light'>Cincinnati got it's name from a roman statesman named Lucius Cincinnatus and was first settled in 1788. Cincinnati is the 3rd largest city in Ohio, and holds great historical significance to American history.</p>

                  <p className='header-logo text-light'>As many of us are aware, Cincinnati was a station in the Underground Railroad. What most don't know about, is the hidden Underground world beneath Cincinnati, that very likely helped with the translocation of many people escaping slavery across the Ohio river into the free state.</p>

      </div>
      <div className="right">
         <img src={oTR} />
      </div>
      <div className="clear"></div>
   </div>
   
   
   
   <div className="mission bg-dark text-light">
     
      <div className="left">
         <img src={ballpark}/>
      </div>
        <div className="right">
         <h1 className='header-logo'>Culture</h1>
         
         <p className='header-logo text-light'>The Great American Ballpark is a hallmark in baseball, and the Cininnati Red Stockings is the oldest baseball team in America. The team is now known as the Cincinnati Reds. Our very own Paul Brown Stadium was erected in honor of Paul Brown himself, whom the Cleveland Browns are also named after. And while your in downtown Cincinnati, take the chance to relax by the river or even take a ride with BB Riverboats and enjoy a 2hr river cruise and buffet dinner!</p>

                  <p className='header-logo text-light'>The Ohio River is a classic hotspot for activity during peak seasons. Ohio and Kentucky citizens enjoy the fun on the weekends with various events being held. And make sure you check out Art on the Levee's art gallery for artworks featured by residents of Cincinnati.</p>

      </div>
      <div className="clear"></div>    
   </div>

   <div className="">
     
      <div className="">
         <img src={jLHQ} className='center-img'/>
      </div>
        <div className="team">
         <h1 className='header-logo'>Landmarks</h1>
         <hr/>
         <p className='header-logo text-light'>Cincinnati is an old city, and it shows in the architecture. While you're here, be sure to stop at the various landmarks that Cincinnati is weell known for. And be inspired by the rich culture and histoy of the city</p>

                  <p className='header-logo text-light'>The Justice League Headquarters was inspired by our very own Union Station, which has been around for 90 years!</p>

      </div>
      <div className="clear"></div>    
   </div>
   
      
    
    </div>
    </article>
    </div>

    
  

          </div>
          <div className="grid-item advertisement container container-fluid">
            {/* Advertisement content goes here */}
            {/* For example: */}
            <div className="advertisement-content">
              <h2>Advertisement</h2>
              <p>Content for your advertisement</p>
              <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/batman-ad.png?raw=true' alt='batman' style={{width:250}} /></div>
            <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/bad2.png?raw=true' alt='batman' style={{width:250}} /></div>
            <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/batman-ad.png?raw=true' alt='batman' style={{width:250}} /></div>
           
            </div>
            <div className="advertisement-content">
              <h2>Advertisement</h2>
              <p>Content for your advertisement</p>
              <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/batman-ad.png?raw=true' alt='batman' style={{width:250}} /></div>
            <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/bad2.png?raw=true' alt='batman' style={{width:250}} /></div>
            <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/batman-ad.png?raw=true' alt='batman' style={{width:250}} /></div>
           
            </div>
            <div className="advertisement-content">
              <h2>Advertisement</h2>
              <p>Content for your advertisement</p>
              <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/batman-ad.png?raw=true' alt='batman' style={{width:250}} /></div>
            <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/bad2.png?raw=true' alt='batman' style={{width:250}} /></div>
            <div className='adspace'><img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/batman-ad.png?raw=true' alt='batman' style={{width:250}} /></div>
           
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default About;

    



