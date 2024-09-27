import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  width: 40%;
  height: 512px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0a2540;
`;

const TextSlide = styled.div`
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  position: absolute;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProductItem = styled.li`
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background-color: #00bcd4;
  border-radius: 50%;
`;

const ProductName = styled.span`
  font-size: 1rem;
`;

const textSlides = [
  {
    title: "Millions",
    description: "BMW owners using ConnectedDrive Store",
    products: [
      { icon: <ProductIcon />, name: "Payments" },
      { icon: <ProductIcon />, name: "Connect" },
    ],
  },
  {
    title: "350+",
    description: "US dealerships",
    products: [
      { icon: <ProductIcon />, name: "Payments" },
      { icon: <ProductIcon />, name: "Connect" },
    ],
  },
  {
    title: "5+",
    description: "Amazon businesses on Stripe including Prime",
    products: [
      { icon: <ProductIcon />, name: "Payments" },
      { icon: <ProductIcon />, name: "Connect" },
    ],
  },
  {
    title: "50+",
    description: "Payment methods available on Stripe",
    products: [
      { icon: <ProductIcon />, name: "Payments" },
      { icon: <ProductIcon />, name: "Connect" },
    ],
  },
  {
    title: "130",
    description: "Countries in logistics network",
    products: [
      { icon: <ProductIcon />, name: "Payments" },
      { icon: <ProductIcon />, name: "Connect" },
    ],
  },
  {
    title: "$10+",
    description: "Billion worth of goods moved ",
    products: [
      { icon: <ProductIcon />, name: "Payments" },
      { icon: <ProductIcon />, name: "Connect" },
    ],
  },
];

const SliderText = ({ activeIndex }) => {
  return (
    <TextContainer>
      {textSlides.map((slide, index) => (
        <TextSlide key={index} active={index === activeIndex}>
          <Title>{slide.title}</Title>
          <Description>{slide.description}</Description>
          <ProductList>
            {slide.products.map((product, idx) => (
              <ProductItem key={idx}>
                {product.icon}
                <ProductName>{product.name}</ProductName>
              </ProductItem>
            ))}
          </ProductList>
        </TextSlide>
      ))}
    </TextContainer>
  );
};

export default SliderText;
