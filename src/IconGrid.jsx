import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCreditCard, FaConnectdevelop, FaTerminal, FaCodeBranch } from 'react-icons/fa';

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
  max-width: 1200px;
  margin: auto;
`;

const TextContainer = styled.div`
  width: 50%;
  padding-right: 50px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #0a2540;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #425466;
`;

const IconContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  position: relative;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: ${props => props.$active ? '#eef2f7' : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:hover {
    background: #eef2f7;
  }
`;

const Line = styled.svg`
  position: absolute;
  pointer-events: none;
  z-index: 1;
`;

const icons = [
  { id: 'connect', icon: <FaConnectdevelop size={40} />, connections: ['payments', 'terminal', 'another'] },
  { id: 'payments', icon: <FaCreditCard size={40} />, connections: ['another', 'three'] },
  { id: 'terminal', icon: <FaTerminal size={40} />, connections: ['four'] },
  { id: 'another', icon: <FaCodeBranch size={40} />, connections: ['three', 'four', 'five'] },
  { id: 'one', icon: <FaCreditCard size={40} />, connections: ['six', 'seven'] },
  { id: 'two', icon: <FaConnectdevelop size={40} />, connections: ['one', 'three', 'four', 'eight'] },
  { id: 'three', icon: <FaTerminal size={40} />, connections: ['two', 'nine'] },
  { id: 'four', icon: <FaCodeBranch size={40} />, connections: ['three', 'five', 'ten'] },
  { id: 'five', icon: <FaCreditCard size={40} />, connections: ['six', 'seven', 'eleven'] },
  { id: 'six', icon: <FaConnectdevelop size={40} />, connections: ['eight', 'nine', 'twelve'] },
  { id: 'seven', icon: <FaTerminal size={40} />, connections: ['ten', 'eleven', 'thirteen'] },
  { id: 'eight', icon: <FaCodeBranch size={40} />, connections: ['nine', 'fourteen'] },
  { id: 'nine', icon: <FaCreditCard size={40} />, connections: ['ten', 'fifteen'] },
  { id: 'ten', icon: <FaConnectdevelop size={40} />, connections: ['eleven', 'sixteen'] },
  { id: 'eleven', icon: <FaTerminal size={40} />, connections: ['twelve', 'seventeen'] },
  { id: 'twelve', icon: <FaCodeBranch size={40} />, connections: ['thirteen', 'eighteen'] },
  { id: 'thirteen', icon: <FaCreditCard size={40} />, connections: ['fourteen', 'nineteen'] },
  { id: 'fourteen', icon: <FaConnectdevelop size={40} />, connections: ['fifteen', 'twenty'] },
  { id: 'fifteen', icon: <FaTerminal size={40} />, connections: ['sixteen', 'twentyone'] },
  { id: 'sixteen', icon: <FaCodeBranch size={40} />, connections: ['seventeen', 'twentytwo'] },
  { id: 'seventeen', icon: <FaCreditCard size={40} />, connections: ['eighteen', 'twentythree'] },
  { id: 'eighteen', icon: <FaConnectdevelop size={40} />, connections: ['nineteen', 'twentyfour'] },
  { id: 'nineteen', icon: <FaTerminal size={40} />, connections: ['twenty', 'twentyfive'] },
  { id: 'twenty', icon: <FaCodeBranch size={40} />, connections: ['twentyone', 'twentysix'] },
  { id: 'twentyone', icon: <FaCreditCard size={40} />, connections: ['twentytwo', 'twentyseven'] },
  { id: 'twentytwo', icon: <FaConnectdevelop size={40} />, connections: ['twentythree', 'twentyeight'] },
  { id: 'twentythree', icon: <FaTerminal size={40} />, connections: ['twentyfour', 'twentynine'] },
  { id: 'twentyfour', icon: <FaCodeBranch size={40} />, connections: ['twentyfive', 'thirty'] },
  { id: 'twentyfive', icon: <FaCreditCard size={40} />, connections: ['twentysix', 'thirtyone'] },
  { id: 'twentysix', icon: <FaConnectdevelop size={40} />, connections: ['twentyseven', 'thirtytwo'] },
  { id: 'twentyseven', icon: <FaTerminal size={40} />, connections: ['twentyeight', 'thirtythree'] },
  { id: 'twentyeight', icon: <FaCodeBranch size={40} />, connections: ['twentynine', 'thirtyfour'] },
  { id: 'twentynine', icon: <FaCreditCard size={40} />, connections: ['thirty', 'thirtyfive'] },
  { id: 'thirty', icon: <FaConnectdevelop size={40} />, connections: ['thirtyone', 'thirtysix'] },
  { id: 'thirtyone', icon: <FaTerminal size={40} />, connections: ['thirtytwo', 'thirtyseven'] },


];

const getIconPosition = (index) => {
  const row = Math.floor(index /5);
  const col = index % 5;
  return { row, col };
};

const createDynamicSnakePath = (start, end) => {
  const path = [`M${start.col * 100 + 50} ${start.row * 100 + 50}`];
  const stepX = (end.col - start.col) / 3;
  const stepY = (end.row - start.row) / 3;

  for (let i = 1; i <= 3; i++) {
    const x = start.col * 100 + 50 + stepX * 100 * i;
    const y = start.row * 100 + 50 + (i % 2 === 0 ? stepY * 100 : -stepY * 100) * i;
    path.push(`L${x} ${y}`);
  }

  path.push(`L${end.col * 100 + 50} ${end.row * 100 + 50}`);
  return path.join(' ');
};

const IconGrid = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <GridContainer>
      <TextContainer>
        <Title>A fully integrated suite of financial and payments products</Title>
        <Description>
          Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform.
          Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
        </Description>
      </TextContainer>
      <IconContainer>
        {icons.map((icon, index) => (
          <React.Fragment key={icon.id}>
            <IconBox
              $active={activeIcon === icon.id}
              onMouseEnter={() => setActiveIcon(icon.id)}
              onMouseLeave={() => setActiveIcon(null)}
            >
              {icon.icon}
            </IconBox>
            {icon.connections.map((connectionId) => {
              const targetIndex = icons.findIndex(i => i.id === connectionId);
              if (targetIndex === -1) return null;

              const start = getIconPosition(index);
              const end = getIconPosition(targetIndex);

              return (
                <Line key={connectionId} width="100%" height="100%" $active={activeIcon === icon.id}>
                  <path
                    d={createDynamicSnakePath(start, end)}
                    stroke="#00bcd4"
                    strokeWidth="2"
                    fill="none"
                  >
                    <animate attributeName="stroke-dasharray" from="0, 1000" to="1000, 0" dur="5s" repeatCount="indefinite" />
                  </path>
                </Line>
              );
            })}
          </React.Fragment>
        ))}
      </IconContainer>
    </GridContainer>
  );
};

export default IconGrid;
