import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const TextContainer = styled.div`
  color: white;
  font-size: 2rem;
  text-align: left;
  line-height: 1.2;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const Icon = styled(FaCheckCircle)`
  color: #fff;
  margin-right: 10px;
  vertical-align: middle;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.a`
  background: ${(props) => (props.primary ? "#001f3f" : "transparent")};
  color: ${(props) => (props.primary ? "#fff" : "#001f3f")};
  border: ${(props) => (props.primary ? "none" : "2px solid #001f3f")};
  border-radius: 25px;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? "#003366" : "rgba(0, 31, 63, 0.1)")};
    color: ${(props) => (props.primary ? "#fff" : "#001f3f")};
  }

  & > svg {
    margin-left: 10px;
  }
`;

const BigText = () => {
  return (
    <TextContainer>
      <Title>
        <Icon />
        Financial infrastructure to grow your revenue
      </Title>
      <Description>
        Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
      </Description>
      <ButtonsContainer>
        <Button primary href="#">
          Start now
        </Button>
        <Button href="#">
          Contact sales
        </Button>
      </ButtonsContainer>
    </TextContainer>
  );
};

export default BigText;
