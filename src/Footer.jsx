import React from "react";
import styled, { keyframes } from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f6f9fc;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0a2540;
  font-size: 14px;
  line-height: 1.5;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
`;

const ColumnTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 20px;
  color: #0a2540;
`;

const ColumnItem = styled.a`
  display: block;
  margin-bottom: 10px;
  color: #425466;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CountrySelect = styled.select`
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
  color: #0a2540;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
  flex-wrap: wrap;
`;

const Copyright = styled.p`
  color: #425466;
  margin: 0;
`;

const textAnimation = keyframes`
  0%, 100% {
    color: #635bff;
    text-shadow: 0 0 10px rgba(99, 91, 255, 0.5);
  }
  50% {
    color: #3232a8;
    text-shadow: 0 0 20px rgba(50, 50, 168, 0.8);
  }
`;

const StyledStripeText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #635bff;
  text-shadow: 0 0 10px rgba(99, 91, 255, 0.5);
  animation: ${textAnimation} 2s infinite;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <Column>
          <StyledStripeText>Stripe</StyledStripeText>
          <CountrySelect>
            <option value="us">United States (English)</option>
            <option value="au">Australia (English)</option>
            {/* Other options */}
          </CountrySelect>
        </Column>
        <Column>
          <ColumnTitle>Products & Pricing</ColumnTitle>
          <ColumnItem href="#">Pricing</ColumnItem>
          <ColumnItem href="#">Atlas</ColumnItem>
          {/* Other items */}
        </Column>
        <Column>
          <ColumnTitle>Solutions</ColumnTitle>
          <ColumnItem href="#">Startups</ColumnItem>
          <ColumnItem href="#">Enterprises</ColumnItem>
          {/* Other items */}
        </Column>
        <Column>
          <ColumnTitle>Resources</ColumnTitle>
          <ColumnItem href="#">Guides</ColumnItem>
          <ColumnItem href="#">Customer stories</ColumnItem>
          {/* Other items */}
        </Column>
        <Column>
          <ColumnTitle>Company</ColumnTitle>
          <ColumnItem href="#">Jobs</ColumnItem>
          <ColumnItem href="#">Newsroom</ColumnItem>
          {/* Other items */}
        </Column>
        <Column>
          <ColumnTitle>Support</ColumnTitle>
          <ColumnItem href="#">Contact sales</ColumnItem>
          <ColumnItem href="#">Support center</ColumnItem>
          {/* Other items */}
        </Column>
      </TopSection>
      <BottomSection>
        <Copyright>© 2024 Stripe, Inc.</Copyright>
        <Copyright>CA residents: +1 111 111 1111</Copyright>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
