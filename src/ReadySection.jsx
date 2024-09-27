import React from "react";
import styled from "styled-components";

const ReadyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #f6f9fc;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #0a2540;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #425466;
  margin-bottom: 40px;
  text-align: center;
  max-width: 800px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${props => (props.primary ? "#635bff" : "#fff")};
  color: ${props => (props.primary ? "#fff" : "#635bff")};
  border: ${props => (props.primary ? "none" : "2px solid #635bff")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => (props.primary ? "#3232a8" : "#f0f0f0")};
    color: ${props => (props.primary ? "#fff" : "#3232a8")};
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30%;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #0a2540;
  margin-bottom: 10px;
`;

const InfoDescription = styled.p`
  font-size: 1rem;
  color: #425466;
  margin-bottom: 20px;
`;

const InfoLink = styled.a`
  font-size: 1rem;
  color: #635bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const DecorativeStrip = styled.div`
  width: 100%;
  height: 20px;
  background: linear-gradient(90deg, #635bff 50%, #00bcd4 50%);
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ReadySection = () => {
  return (
    <ReadyContainer>
      <Title>Ready to get started?</Title>
      <Description>
        Create an account instantly to get started or contact us to design a custom package for your business.
      </Description>
      <ButtonGroup>
        <Button primary>Start now</Button>
        <Button>Contact sales</Button>
      </ButtonGroup>
      <InfoContainer>
        <InfoBlock>
          <InfoTitle>Always know what you pay</InfoTitle>
          <InfoDescription>Integrated per-transaction pricing with no hidden fees.</InfoDescription>
          <InfoLink href="#">Pricing details</InfoLink>
        </InfoBlock>
        <InfoBlock>
          <InfoTitle>Start your integration</InfoTitle>
          <InfoDescription>Get up and running with Stripe in as little as 10 minutes.</InfoDescription>
          <InfoLink href="#">API reference</InfoLink>
        </InfoBlock>
      </InfoContainer>
      <DecorativeStrip />
    </ReadyContainer>
  );
};

export default ReadySection;
