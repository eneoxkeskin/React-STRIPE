import React from "react";
import styled from "styled-components";
import {
  FaLifeRing,
  FaTag,
  FaBook,
  FaUsers,
  FaBlog,
  FaCalendarCheck,
  FaEnvelope,
  FaBriefcase,
  FaNewspaper,
  FaBookOpen,
  FaHandshake
} from "react-icons/fa";
import {
  Heading,
  LinkList,
  DropdownSection,
} from "./Components";

const CompanyDropdownEl = styled.div`
  width: 30rem;
  padding: 1rem;
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left; /* Merkezde hizalama */
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center; /* Merkezde hizalama */
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Merkezde hizalama */
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const GreySection = styled.div`
  background: #f6f9fc;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center; /* Merkezde hizalama */
`;

const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <FlexContainer>
          <Column>
            <LinkList>
              <li>
                <a href="/"><FaLifeRing /> Support center</a>
              </li>
              <li>
                <a href="/"><FaTag /> Support plans</a>
              </li>
              <li>
                <a href="/"><FaBook /> Guides</a>
              </li>
              <li>
                <a href="/"><FaUsers /> Customer stories</a>
              </li>
            </LinkList>
          </Column>
          <Column>
            <LinkList>
              <li>
                <a href="/"><FaBlog /> Blog</a>
              </li>
              <li>
                <a href="/"><FaCalendarCheck /> Sessions</a>
              </li>
              <li>
                <a href="/"><FaEnvelope /> Contact sales</a>
              </li>
            </LinkList>
          </Column>
        </FlexContainer>
      </DropdownSection>
      <GreySection>
        <FlexContainer>
          <Column>
            <LinkList>
              <li>
                <a href="/"><FaBriefcase /> Jobs</a>
              </li>
              <li>
                <a href="/"><FaNewspaper /> Newsroom</a>
              </li>
            </LinkList>
          </Column>
          <Column>
            <LinkList>
              <li>
                <a href="/"><FaBookOpen /> Stripe Press</a>
              </li>
              <li>
                <a href="/"><FaHandshake /> Become a partner</a>
              </li>
            </LinkList>
          </Column>
        </FlexContainer>
      </GreySection>
    </CompanyDropdownEl>
  );
};

export default CompanyDropdown;
