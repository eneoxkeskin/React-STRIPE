import React from "react";
import styled, { keyframes } from "styled-components";
import a1 from "./assets/a-1.jpg";
import a2 from "./assets/a-2.jpg";
import a3 from "./assets/a-3.jpg";
import a4 from "./assets/a-4.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  padding: 60px 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1.5s ease-out;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 2s ease-out;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1100px;
  animation: ${fadeIn} 2.5s ease-out;
`;

const GridRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  &:nth-child(odd) {
    & > :first-child {
      margin-top: 100px;
    }
  }
  &:nth-child(even) {
    & > :first-child {
      margin-top: 100px;
    }
    & > :last-child {
      margin-top: 0;
    }
  }
`;

const GridItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  animation: ${fadeIn} 3s ease-out;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  color: #0a2540;
  margin: 20px 0 10px;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: #425466;
  text-align: center;
`;

const Section = () => {
  return (
    <SectionContainer>
      <SectionTitle>Built for growth</SectionTitle>
      <SectionDescription>
        Startups build on Stripe to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low- to no-code solutions, which are simple enough for easy implementation and powerful enough to scale as fast and as far as you need.
      </SectionDescription>
      <GridContainer>
        <GridRow>
          <GridItem>
            <ItemImage src={a1} alt="Image 1" />
            <ItemTitle>Incorporate your company</ItemTitle>
            <ItemDescription>
              Form a legal entity, issue stock, and start accepting payments.
            </ItemDescription>
          </GridItem>
          <GridItem>
            <ItemImage src={a2} alt="Image 2" />
            <ItemTitle>Validate your idea</ItemTitle>
            <ItemDescription>
              Test your product idea by launching payments with little to no code.
            </ItemDescription>
          </GridItem>
        </GridRow>
        <GridRow>
          <GridItem>
            <ItemImage src={a3} alt="Image 3" />
            <ItemTitle>Sell to businesses</ItemTitle>
            <ItemDescription>
              Launch a B2B business and collect one-time or recurring payments from customers.
            </ItemDescription>
          </GridItem>
          <GridItem>
            <ItemImage src={a4} alt="Image 4" />
            <ItemTitle>Sell to consumers</ItemTitle>
            <ItemDescription>
              Launch a B2C business with a prebuilt payment page that's optimized for conversion.
            </ItemDescription>
          </GridItem>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export default Section;
