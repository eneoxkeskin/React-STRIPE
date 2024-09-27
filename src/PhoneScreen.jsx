import React from 'react';
import styled from 'styled-components';
import { FaApple } from 'react-icons/fa';

const PhoneContainer = styled.div`
  width: 300px;
  height: 600px;
  background: #f8f8f8;
  border-radius: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  position: relative;
  z-index: 2;
  user-select: none;
  pointer-events: none;
  right: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Notch = styled.div`
  width: 200px;
  height: 30px;
  background: #000;
  border-radius: 0 0 20px 20px;
  margin-bottom: 20px;
`;

const PhoneHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  width: 100%;
`;

const PayButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  &:hover {
    background: #5469d4;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const PhoneScreen = () => {
  return (
    <PhoneContainer>
      <Notch />
      <PhoneHeader>
        <HeaderTitle>Abstraction Magazine</HeaderTitle>
      </PhoneHeader>
      <Card>
        <HeaderTitle>$19 per month</HeaderTitle>
        <PayButton>
          <FaApple style={{ marginRight: '10px' }} />
          Pay with Apple Pay
        </PayButton>
        <p>Or pay with card</p>
        <Input type="text" placeholder="Card Number" />
        <Input type="text" placeholder="MM/YY" />
        <Input type="text" placeholder="CVC" />
        <Input type="text" placeholder="ZIP" />
        <PayButton>Pay</PayButton>
      </Card>
    </PhoneContainer>
  );
};

export default PhoneScreen;
