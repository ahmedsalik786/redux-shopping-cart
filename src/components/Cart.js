import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from "react-bootstrap";
import { remove } from '../Store/cartSlice';

function Cart() {
  const productcart = useSelector(state=>state.cart);
  const dispatch=useDispatch();

  function removeItem(id){
    dispatch(remove(id))
  }

  const cards = productcart.map((product) => (
    <div key={product.id} className="col-md-3">
      <Card
        style={{
          width: "12rem",
          height: "25rem",
          border: "2px solid green",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <Card.Img
          style={{ width: "80%", height: "12rem", margin: "5%" }}
          variant="top"
          src={product.image}
          alt={product.title}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "15px" }}>{product.title}</Card.Title>
          <Card.Text>INR: {product.price} ₹</Card.Text>
          <Card.Text>Rate: {product.rating.rate} ✬</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={()=>removeItem(product.id)} >remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
    <div>Cart</div>
    <div className="cart-container">

    {cards}
    </div>
    </>
  )
}

export default Cart