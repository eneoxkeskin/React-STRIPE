import React, { Component } from "react";
import styled from "styled-components";

const NavbarEl = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px; /* Sol ve sağdan boşluk bırakmak için padding ekliyoruz */
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 15px;
  padding-right: 200px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.a`
  background-color: ${props => props.$primary ? 'white' : ''};
  color: ${props => props.$primary ? '' : 'white'};
  padding: 10px 20px;
  border-radius: ${props => props.$primary ? '20px' : '5px'};
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props;
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <Logo>Stripe</Logo>
        <NavbarList>{children}</NavbarList>
        <ButtonGroup>
          <Button href="/">Contact sales</Button>
          <Button $primary href="/">Sign in</Button>
        </ButtonGroup>
      </NavbarEl>
    );
  }
}

export default Navbar;
