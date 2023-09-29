import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BasicExample() {
  const cartProducts=useSelector(state=>state.cart);
  return (
    <Navbar expand="lg" className=" nav-container bg-body-tertiary">
        <h3>Redux toolkit</h3>
        <Link className='link' to="/">Product</Link>
        <Link  className="link" to="/cart">My bag {cartProducts.length}</Link>
    </Navbar>
  );
}

export default BasicExample;