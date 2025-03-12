import { Settings } from 'lucide-react';
import nitroxImage from '../../assets/image copy.png';
import acceleronsImage from '../../assets/image copy 2.png';
import styled from 'styled-components';
const AboutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  position: relative;
`;

const TeamSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  z-index: 1;
  margin-top: 2rem;
`;

const TeamName = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 3;

  &:first-of-type {
    right: 130px;
    top: 50px;
  }

  &:last-of-type {
    left: 130px;
    bottom: 50px;
  }
`;

const TeamText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  span:first-child {
    font-size: 0.875rem;
    color: #666;
    font-weight: 500;
  }

  span:last-child {
    font-size: 1rem;
    color: #333;
    font-weight: 400;
    letter-spacing: 0.1em;
  }
`;

const GreenLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #2E7D32;
  position: relative;

  &:first-of-type {
    margin-left: auto;
  }
`;

const ImageContainer = styled.div`
  margin: 2rem auto;
  position: relative;
  height: 700px;
  width: 100%;
  max-width: 700px;
  
  img {
    position: absolute;
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 300px;
    height: 450px;
    object-fit: cover;
    
    &:first-child {
      top: 0;
      left: 1rem;
      z-index: 1;
      background: white;
      width: 300px;
    }
    
    &:nth-child(2) {
      bottom: 0;
      right: -40px;
      z-index: 1;
    }
    
    &:hover {
      transform: scale(1.02);
      z-index: 3;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
    }
  }
`;

const AboutSection = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 6rem;
  padding-right: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 0;
  margin-left: -2rem;
  margin-right: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #000;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 3rem;
`;

const WhatWeDoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #000;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(8px);
  }
`;

const IconWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

const FeatureText = styled.span`
  font-size: 1.1rem;
  color: #333;
`;

export function About() {
    return <AboutContainer>
        <TeamSection>
          <ImageContainer>
            <TeamName>
              <GreenLine />
              <TeamText>
                <span>Team</span>
                <span>Accelerons</span>
              </TeamText>
            </TeamName>
            <img src={acceleronsImage} alt="Team Accelerons" />
            <img src={nitroxImage} alt="Team Nitrox" />
            <TeamName>
              <TeamText>
                <span>Team</span>
                <span>Nitrox</span>
              </TeamText>
              <GreenLine />
            </TeamName>
          </ImageContainer>
        </TeamSection>

        <AboutSection>
          <AboutTitle>ABOUT US</AboutTitle>
          <AboutText>
            At SAE NIT Kurukshetra, we believe in pushing the boundaries of automotive engineering through
            rigorous research, hands-on experience, and real-world applications. Our teams participate in
            prestigious national and international competitions, showcasing our technical expertise and engineering
            skills.
          </AboutText>

          <WhatWeDoTitle>What We Do ?</WhatWeDoTitle>
          <FeatureList>
            <FeatureItem>
              <IconWrapper>
                <Settings size={24} />
              </IconWrapper>
              <FeatureText>
                Design & build EV (Electric Vehicles) and CV (Combustion Vehicles)
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <IconWrapper>
                <Settings size={24} />
              </IconWrapper>
              <FeatureText>
                Compete in SAE competitions like BAJA, Supra, and Formula Student
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <IconWrapper>
                <Settings size={24} />
              </IconWrapper>
              <FeatureText>
                Innovate in sustainable & high-performance automotive technologies
              </FeatureText>
            </FeatureItem>
          </FeatureList>
        </AboutSection>
      </AboutContainer>

      
}