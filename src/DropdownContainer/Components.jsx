import styled, { keyframes } from "styled-components";
import { promoteLayer } from "./utils";

// Function to get the keyframes for the DropdownRoot animation
const getDropdownRootKeyFrame = ({ animatingOut, direction }) => {
  if (!animatingOut && direction) return null; // If not animating out and there is a direction, return null
  return keyframes`
    from {
      transform: ${animatingOut ? "rotateX(0)" : "rotateX(-15deg)"};
      opacity: ${animatingOut ? 1 : 0};
    }
    to {
      transform: ${animatingOut ? "rotateX(-15deg)" : "rotateX(0)"};
      opacity: ${animatingOut ? 0 : 1};
    }
  `;
};

// Styled component for the root of the dropdown
export const DropdownRoot = styled.div`
  transform-origin: 0 0;
  ${promoteLayer}
  animation-name: ${props => getDropdownRootKeyFrame(props)};
  animation-duration: ${props => props.$duration}ms;
  animation-fill-mode: forwards; /* Use 'forwards' to prevent flicker on leave animation */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px;
`;

// Styled component for the caret in the dropdown
export const Caret = styled.div`
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent var(--white);
  z-index: 1; /* Ensure it's above the main dropdown container so no box-shadow bleeds over it */
  position: relative;
  top: 1px; /* Prevent any gap in between caret and main dropdown */
`;

// Styled component for the background of the dropdown
export const DropdownBackground = styled.div`
  transform-origin: 0 0;
  background-color: var(--white);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1);
  ${promoteLayer}
`;

// Styled component for an alternate background
export const AltBackground = styled.div`
  background-color: var(--grey);
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform-origin: 0 0;
  z-index: 0;
  transition: transform ${props => props.$duration}ms;
`;

// Styled component for an inverted div, used for layering
export const InvertedDiv = styled.div`
  ${promoteLayer}
  position: ${props => (props.$absolute ? "absolute" : "relative")};
  top: 0;
  left: 0;
  &:first-of-type {
    z-index: 1;
  }
  &:not(:first-of-type) {
    z-index: -1;
  }
`;
