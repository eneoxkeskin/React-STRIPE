import React from "react";
import styled from "styled-components";
import {
  FaBook,
  FaCode,
  FaCheck,
  FaMobile,
  FaApple,
  FaFlask,
  FaClipboardCheck,
  FaLink,
  FaCogs,
  FaProjectDiagram,
  FaSync,
} from "react-icons/fa";
import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList
} from "./Components";

const DevelopersDropdownEl = styled.div`
  width: 40rem;
  display: flex;
  padding: 1rem;
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`;

const HeadingLinkStyled = styled(HeadingLink)`
  ${props => props.$noMarginBottom && 'margin-bottom: 0;'}
`;

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <Heading>
          <FaBook style={{ marginRight: "8px" }} />
          Documentation
        </Heading>
        <p>Start integrating Stripe’s products and tools</p>
        <Flex>
          <Column>
            <Heading>GET STARTED</Heading>
            <LinkList>
              <li>
                <a href="/"><FaCheck /> Prebuilt checkout</a>
              </li>
              <li>
                <a href="/"><FaCode /> Libraries and SDKs</a>
              </li>
              <li>
                <a href="/"><FaMobile /> App integrations</a>
              </li>
              <li>
                <a href="/"><FaFlask /> Code samples</a>
              </li>
            </LinkList>
          </Column>
          <Column>
            <Heading>GUIDES</Heading>
            <LinkList>
              <li>
                <a href="/"><FaApple /> Accept online payments</a>
              </li>
              <li>
                <a href="/"><FaClipboardCheck /> Manage subscriptions</a>
              </li>
              <li>
                <a href="/"><FaLink /> Send payments</a>
              </li>
              <li>
                <a href="/"><FaCogs /> Set up in-person payments</a>
              </li>
            </LinkList>
          </Column>
        </Flex>
      </DropdownSection>
      <DropdownSection>
        <LinkList>
          <HeadingLinkStyled>
            <a href="/">
              <FaCode /> Full API reference
            </a>
          </HeadingLinkStyled>
          <HeadingLinkStyled>
            <a href="/">
              <FaSync /> API status
            </a>
          </HeadingLinkStyled>
          <HeadingLinkStyled $noMarginBottom>
            <a href="/">
              <FaCogs /> API changelog
            </a>
          </HeadingLinkStyled>
          <HeadingLinkStyled $noMarginBottom>
            <a href="/">
              <FaProjectDiagram /> Build on Stripe Apps
            </a>
          </HeadingLinkStyled>
        </LinkList>
      </DropdownSection>
    </DevelopersDropdownEl>
  );
};

export default DevelopersDropdown;
