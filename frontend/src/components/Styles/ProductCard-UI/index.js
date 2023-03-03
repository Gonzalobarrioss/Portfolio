import React from "react";
import {
  Container,
  Card,
  ImgBx,
  ContentBx,
  H2,
  H3,
  Size,
  Color,
  Link,
} from "./ProductCardElements";
import Shoes from "./shoes.png";

const ProductCard = () => {
  return (
    <Container>
      <Card>
        <ImgBx className="imgbox">
          <img
            src={Shoes}
            alt="shoes"
            style={{ width: "100%", height: "auto" }}
          />
        </ImgBx>
        <ContentBx className="contentbox">
          <H2>Nike Shoes</H2>
          <Size className="size">
            <H3>Size: </H3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </Size>
          <Color className="color">
            <H3>Color: </H3>
            <span></span>
            <span></span>
            <span></span>
          </Color>
          <Link className="link">Buy Now</Link>
        </ContentBx>
      </Card>
    </Container>
  );
};

export default ProductCard;
