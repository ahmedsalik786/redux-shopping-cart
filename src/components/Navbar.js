import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className=" nav-container bg-body-tertiary">
        <h3>Redux toolkit</h3>
        <Link className='link' to="/">Product</Link>
        <Link  className="link" to="/cart">My bag 0</Link>
    </Navbar>
  );
}

export default BasicExample;