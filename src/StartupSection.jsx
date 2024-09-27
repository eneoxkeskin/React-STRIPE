import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const SectionContent = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #0a2540;
  margin-bottom: 20px;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #425466;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 1000px;
  border-radius: 10px;
`;

const StartupSection = () => {
  return (
    <SectionWrapper>
      <SectionContent>
        <SectionTitle>Take your startup farther, faster</SectionTitle>
        <SectionDescription>
          Startups build on Stripe to launch faster, adapt as they grow, and
          automate workflows to do more with less. Build your own API-based
          integration or use our low- to no-code solutions, which are simple
          enough for easy implementation and powerful enough to scale as fast
          and as far as you need.
        </SectionDescription>
        <ImageWrapper>
          <Image src="/path-to-your-image.png" alt="Startup Section Image" />
        </ImageWrapper>
      </SectionContent>
    </SectionWrapper>
  );
};

export default StartupSection;
