import React, { Component } from "react";
import AnimatedNavbar from "./AnimatedNavbar";
import BigText from "./BigText";
import PhoneScreen from "./PhoneScreen";
import DashboardScreen from "./DashboardScreen";
import IconGrid from "./IconGrid";
import Slider from "./Slider";
import HeaderText from "./HeaderText";
import Section from "./Section";
import ReadySection from "./ReadySection";
import Footer from "./Footer"; // Import the Footer component
import styled from "styled-components";
import "./index.css";
import "normalize.css";

const AppContainer = styled.div`
  background: linear-gradient(
    150deg,
    var(--gradientColorZero) 15%,
    var(--gradientColorOne) 35%,
    var(--gradientColorTwo) 55%,
    var(--gradientColorThree) 100%
  );
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex: 1;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const StyledPhoneScreen = styled(PhoneScreen)`
  position: absolute;
  z-index: 2;
  bottom: 20px;
`;

const StyledDashboardScreen = styled(DashboardScreen)`
  position: absolute;
  z-index: 1;
  top: 20px;
`;

const SliderSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  state = { duration: 300, activeIndex: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        activeIndex: (prevState.activeIndex + 1) % 3,
      }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <AppContainer>
        <AnimatedNavbar duration={this.state.duration} />
        <ContentContainer>
          <LeftSection>
            <BigText />
          </LeftSection>
          <RightSection>
            <StyledPhoneScreen />
            <StyledDashboardScreen />
          </RightSection>
        </ContentContainer>

        <IconGrid />

        <SliderSection>
          <HeaderText />
          <Slider activeIndex={this.state.activeIndex} />
        </SliderSection>

        <Section />
        <ReadySection />
        <Footer /> {/* Add the Footer component here */}
      </AppContainer>
    );
  }
}

export default App;
