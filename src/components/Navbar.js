import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import "../index.css"


const Navigation = () => {
    return (
<Navbar expand="lg" bg="dark" data-bs-theme='dark' className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="/" className='header-logo'  style={{ color: "white"}}><h3>Cincinnati Travel Charter</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='bg-body-tertiary p-3' bg='dark' data-bs-theme="dark" id="basic-navbar-nav">
          <Nav bg="dark" data-bs-theme='dark' className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/attractions">Attractions</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)
}
 export default Navigation;




//  <nav collapseOnSelect className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <div className='header-logo'>
//     <NavLink to='/'><h1>Cincinnati Travel Charter</h1></NavLink>
//     </div>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="Namecollapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
      
//         <NavLink to='/attractions'>Attractions</NavLink>
//         <NavLink to='/about'>About</NavLink>
//         <NavLink to='/contact'>Contact</NavLink>
        
//       </div>
//     </div>
//   </div>
// </nav>
