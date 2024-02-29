import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import { Link, Outlet } from 'react-router-dom';

function NavScrollExample() {
  return (
    <>
    <Navbar expand="lg" className="fixed-top navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize:'2rem',fontWeight:'bold'}} className='brand'>RATATOUILLE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 brand"
            style={{fontSize:'1.2rem',fontWeight:'bold'}}
            navbarScroll
          >
            <Link to={'/'} style={{textDecoration:'none',padding:'1rem',color:'white'}}><div>HOME</div></Link>
            <Link to={'/allitems'} style={{textDecoration:'none',padding:'1rem',color:'white'}}><div>ALL ITEMS</div></Link>
            <Link to={'/fav'} style={{textDecoration:'none',padding:'1rem',color:'white'}}><div>FAVOURITE</div></Link>
            <Link to={'/country'} style={{textDecoration:'none',padding:'1rem',color:'white'}}><div>COUNTRY</div></Link>
            <Link to={'/category'} style={{textDecoration:'none',padding:'1rem',color:'white'}}><div>CATEGORY</div></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default NavScrollExample;