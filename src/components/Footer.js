// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
//       <footer>
//       <div className="container-fluid">
//     <div className='header-logo'>
//     <Link to='/'><h1></h1></Link>
//     </div>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div class="Namecollapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav container-fluid">
//         <Link to='/attractions'>Attractions</Link>
//         <Link to='/about'>About</Link>
//         <Link to='/contact'>Contact</Link>
       
//       </div>
//     </div>
//   </div>


  
//       </footer>
//     </div>
//   )
// }

// export default Footer


import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 className='header-logo' style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Cincinnati Travel Charter
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Resident & Neighborhood</FooterLink>
            <FooterLink href="#">Public Safety</FooterLink>
            <FooterLink href="#">Municipality</FooterLink>
            <FooterLink href="#">Health & Medical</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Chamber of Commerce</FooterLink>
            <FooterLink href="#">Clerk of Council</FooterLink>
            <FooterLink href="#">Transit Authority</FooterLink>
            <FooterLink href="#">Customer Service Line: Dial 311 or 513.591.6000</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;