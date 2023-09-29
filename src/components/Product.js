import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { add } from "../Store/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../Store/productSlice";

function Product() {
  const dispatch = useDispatch();
  const {data:products} = useSelector((state) => state.products);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) =>{ setProducts(data)
    //   console.log(products)});


    dispatch(getProducts())

  }, []);

  function addToCart(product) {
    dispatch(add(product));
  }

  const cards = products.map((product) => (
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
          <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div>Product Dashboard</div>
      <div className="row">{cards}</div>
    </>
  );
}

export default Product;
