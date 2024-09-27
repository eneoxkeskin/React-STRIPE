import React from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 40px;
  background: linear-gradient(150deg, rgba(99, 91, 255, 0.7), rgba(50, 50, 168, 0.7));
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const HeaderContent = styled.div`
  text-align: center;
  color: white;
  padding: 60px 40px;
  width: 80%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const HeaderDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #e0e0e0;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #635bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background-color: #3232a8;
    box-shadow: 0 4px 20px rgba(99, 91, 255, 0.6);
  }
`;

const ButtonIcon = styled(FaArrowRight)`
  margin-left: 10px;
  transition: transform 0.3s ease;
  ${HeaderButton}:hover & {
    transform: translateX(5px);
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  filter: blur(50px);
  z-index: 1;
  animation: ${fadeIn} 2s ease-in-out infinite alternate;
  @keyframes float {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
  animation: float 3s ease-in-out infinite;
`;

const BackgroundShapeTwo = styled(BackgroundShapes)`
  top: auto;
  bottom: -50px;
  left: auto;
  right: -50px;
`;

const HeaderText = () => {
  return (
    <HeaderContentWrapper>
      <BackgroundShapes />
      <BackgroundShapeTwo />
      <HeaderContent>
        <HeaderTitle>Enterprise reinvention</HeaderTitle>
        <HeaderDescription>
          Bring agility to your enterprise. You can use Stripe not only to accept payments but also to quickly support new markets, upgrade existing systems and tools, go direct-to-consumer, and engage customers with subscriptions and marketplaces. Get expert integration guidance from our professional services team and certified partners so you can see value with Stripe faster.
        </HeaderDescription>
        <ButtonContainer>
          <HeaderButton>
            Contact sales
            <ButtonIcon />
          </HeaderButton>
        </ButtonContainer>
      </HeaderContent>
    </HeaderContentWrapper>
  );
};

export default HeaderText;
