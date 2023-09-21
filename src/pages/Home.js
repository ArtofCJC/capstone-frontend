import React from 'react'
import { Carousel } from 'react-bootstrap';
import citySkyline from './images/citySL.jpg'
import ballpark from './images/gabp.jpg'
import jLHQ from './images/justiceleaguehq.jpg'
import oTR from './images/otr.jpg'
import pBS from './images/pbs.jpg'
import cMH from './images/cmh.jpg'
import cTerm from './images/cterm.jpg'
import csky from './images/cincyskylineclip.png'

const Home = () => {
  return (
    <div>
      
      
    

    <article>
    <div class="container-fluid">
    <div class="row">
            <div class="col">
                <div class="title-section dropShad cardbg container container-fluid">
            <img src={csky} alt='skyline' className='cotainer container-fluid imgbrdrnd'/>
                    <h1 className='header-logo' style={{ color: "white"}}>Welcome to Cincinnati</h1>
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-7">

                <div class="content-section">
                  
                    <div>

                    <Carousel className='dropShad'>
      <Carousel.Item>
      <img src={cTerm} className='cimg content-section'/>
        <Carousel.Caption>
          <h3>Union Station</h3>
          <p>A former train terminal turned museum. Known as the inspiration behind the Justice League HQ</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img src={pBS} className='cimg content-section'/>
        <Carousel.Caption>
          <h3>Paul Brown Stadium</h3>
          <p>Named after Paul Brown. The former coach and co-founder of the Cleveland Browns, and the original coach of the Cincinnati Bengals</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={cMH} className='cimg content-section'/>
        <Carousel.Caption>
          <h3>Cincinnati Music Hall</h3>
          <p>
            The Music Hall, designed by architect Samuel Hannaford, was build in 1878.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <div><h1 className='header-logo text-light'>This is Cincinnati</h1><p className='header-logo text-light'>Welcome to Cincinnati, Ohio, a vibrant and culturally rich city nestled along the banks of the mighty Ohio River. Known for its diverse array of attractions, Cincinnati offers a captivating blend of history, sports, arts, and entertainment that will surely leave travelers enthralled. As you embark on your journey through this bustling metropolis, be prepared to explore iconic landmarks such as the Union Station, a majestic testament to the city's transportation history, and Paul Brown Stadium, home to the Cincinnati Bengals, where you can catch an exciting NFL game. Just a stone's throw away is the Great American Ballpark, where you can cheer on the Cincinnati Reds and soak in the timeless tradition of America's favorite pastime.

For those with a love for wildlife and the great outdoors, the Cincinnati Zoo is a must-visit destination. This world-renowned zoo is home to a diverse collection of animals and offers a delightful experience for animal enthusiasts of all ages. To immerse yourself in the city's vibrant cultural scene, make sure to visit the Cincinnati Music Hall, an architectural masterpiece that hosts a variety of performances, from classical concerts to Broadway shows. These are just a few of the many attractions that Cincinnati has to offer, promising an unforgettable travel experience filled with history, sports, and the arts.</p></div>
    </div>
                </div>
            </div>
            <div class="col-5 adspace">

              <div class="sidebar-item">
                <div class="make-me-sticky adspace">
                  <img src='https://github.com/ArtofCJC/capstone-frontend/blob/master/src/pages/images/batman-ad.png?raw=true' alt='batman ad' style={{width:400}} />
                </div>
              </div>
          

            </div>
        </div>
    </div>
</article>

</div>

  )
}

export default Home



{/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={citySkyline} className='fill img'/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={citySkyline} className='fill img'/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={citySkyline} className='fill img'/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}