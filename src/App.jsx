import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Settings } from 'lucide-react';
import styled from 'styled-components';
import seniorImage from './assets/image.png';
import nitroxImage from './assets/image copy.png';
import acceleronsImage from './assets/image copy 2.png';
import vectorBg from './assets/Vector2523.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css'

// Styled Components for About Us Section
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
  height: 600px;
  width: 100%;
  max-width: 600px;
  
  img {
    position: absolute;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
    width: 275px;
    height: 402.5716247558594px;
    object-fit: cover;
    
    &:first-child {
      top: 0;
      left: 0;
      z-index: 1;
      background: white;
    }
    
    &:nth-child(2) {
      bottom: 0;
      right: 0;
      z-index: 1;
    }
    
    &:hover {
      transform: scale(1.02);
      z-index: 2;
    }
  }
`;

const AboutSection = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-left: -2rem;
  border-radius: 24px 0 0 24px;
  box-shadow: -8px 0 24px rgba(0, 0, 0, 0.1);
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

// Add these new styled components after the existing styled components and before the App component
const FundSection = styled.section`
  padding: 6rem 0;
  background: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: url(${vectorBg}) no-repeat center center;
    background-size: contain;
    opacity: 0.1;
    z-index: 1;
  }
`;

const FundTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  font-weight: 600;
  color: #000;
  position: relative;
  z-index: 2;
`;

const FundStepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const FundStep = styled.div`
  flex: 1;
  max-width: 300px;
  text-align: center;
  position: relative;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  z-index: 2;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 2.5rem;
    right: -3rem;
    width: 4rem;
    height: 2px;
    border: 2px dashed #e0e0e0;
    z-index: 2;
  }
`;

const StepNumber = styled.div`
  width: 3rem;
  height: 3rem;
  background: #000;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 3;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const swiperRef = useRef(null);

  const sponsors = [
    {
      id: 1,
      name: 'Priya Malhotra',
      title: 'Senior Automotive Engineer',
      batch: 'Batch 2024',
      featured: true
    },
    {
      id: 2,
      name: 'Rahul Sharma',
      title: 'Product Manager, Google',
      batch: 'Batch 2022'
    },
    {
      id: 3,
      name: 'Anita Patel',
      title: 'CTO, Startup Innovations',
      batch: 'Batch 2020'
    },
    {
      id: 4,
      name: 'Vikram Mehta',
      title: 'Data Scientist, Microsoft',
      batch: 'Batch 2021'
    },
    {
      id: 5,
      name: 'Neha Gupta',
      title: 'Software Architect, Amazon',
      batch: 'Batch 2019'
    },
    {
      id: 6,
      name: 'Arjun Singh',
      title: 'Mechanical Engineer, Tesla',
      batch: 'Batch 2023'
    },
    {
      id: 7,
      name: 'Kavita Reddy',
      title: 'Research Scientist, ISRO',
      batch: 'Batch 2018'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Vaibhav Dharmani',
      title: 'president'
    },
    {
      id: 2,
      name: 'Himanshu Khatri',
      title: 'vice president'
    },
    {
      id: 3,
      name: 'VINAY SAINI',
      title: 'secretary'
    },
    {
      id: 4,
      name: 'Lisha Garg',
      title: 'secretary'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="container header-container">
          <a href="#" className="logo">SAE NIT kurukshetra</a>
          <nav className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">Nitrox</a>
            <a href="#">Autokriti</a>
            <a href="#">Accelerons</a>
            <a href="#">SAE Unity Drive</a>
          </nav>
        </div>
      </header>

      {/* Thank You Seniors Section */}
      <section className="thank-you-section">
        <div className="thank-you-text">
          <h1>
            THANK<br/>
            YOU<br/>
            SENIORS
          </h1>
          <p>w e&nbsp;&nbsp;a l l&nbsp;&nbsp;M i s s&nbsp;&nbsp;Y o u</p>
        </div>
        <div className="thank-you-image">
          <img src={seniorImage} alt="Thank You Seniors" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-left">
          <h2>POWERING INNOVATION, DRIVEN BY ALUMNI</h2>
          <p>Join hands with SAE NIT Kurukshetra and accelerate our journey in building cutting-edge EV and CV projects. Your support fuels our dreams!</p>
          <a href="#" className="fund-now-btn">Fund Now</a>
        </div>
        <div className="stats-right">
          <div className="stat-item">
            <div className="stat-number">4627+</div>
            <div className="stat-label">TOTAL FUND</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24<span>K</span></div>
            <div className="stat-label">TOTAL FUND</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100</div>
            <div className="stat-label">ALL ALUMNI</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50</div>
            <div className="stat-label">TEAM MEMBERS</div>
          </div>
        </div>
      </section>

      {/* Alumni Sponsors */}
      <section className="sponsors">
        <div className="sponsors-container">
          <div className="sponsors-header">
            <h2>OUR PROUD ALUMNI SPONSORS</h2>
            <p>Meet the trailblazers who have fueled our journey. Their support has been instrumental in driving innovation at SAE NIT Kurukshetra</p>
            <div className="year-selector">
              YEAR : 2024 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <a href="#" className="btn">View More</a>
          </div>
          
          <div className="sponsors-showcase">
            <div className="sponsors-carousel">
              <div className="sponsor-slides-container">
                {/* Duplicate the sponsors array to create continuous scroll effect */}
                {[...sponsors, ...sponsors].map((sponsor, index) => (
                  <div 
                    className="sponsor-slide" 
                    key={`${sponsor.id}-${index}`}
                    onMouseEnter={() => setActiveSlide(sponsor.id - 1)}
                  >
                    <div className="sponsor-image"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sponsor-details">
              <div className="sponsor-info">
                <h3>{sponsors[activeSlide].name}</h3>
                <p>{sponsors[activeSlide].title}</p>
                <p>{sponsors[activeSlide].batch}</p>
              </div>
              <div className="sponsor-nav">
                <button className="nav-button prev" onClick={handlePrev}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="nav-button next" onClick={handleNext}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutContainer>
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

      {/* Fund Section */}
      <FundSection>
        <FundTitle>HOW TO FUND</FundTitle>
        <FundStepsContainer>
          <FundStep>
            <StepNumber>1</StepNumber>
            <StepTitle>Choose Your Contribution</StepTitle>
            <StepDescription>
              Select a sponsorship level that fits your generosity—Gold, Silver, or Bronze Sponsor—or donate any amount of your choice.
            </StepDescription>
          </FundStep>
          <FundStep>
            <StepNumber>2</StepNumber>
            <StepTitle>Choose Your Destination</StepTitle>
            <StepDescription>
              Decide which specific team or project you want to support—Team Accelerons, Team Nitrox, or general SAE initiatives.
            </StepDescription>
          </FundStep>
          <FundStep>
            <StepNumber>3</StepNumber>
            <StepTitle>Choose Your Payment Method</StepTitle>
            <StepDescription>
              Complete your contribution using your preferred payment method. All transactions are secure and encrypted.
            </StepDescription>
          </FundStep>
        </FundStepsContainer>
      </FundSection>

      {/* Team Section */}
      <section className="team">
        <div className="container team-container">
          <h2>TEAM MEMBERS</h2>
          <div className="team-members">
            {teamMembers.map((member) => (
              <div className="team-member" key={member.id}>
                <div className="member-img">
                  <div className="member-name">{member.name}</div>
                  <div className="member-title">-{member.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-container">
          <div className="footer-column">
            <div className="footer-logo">Cal.com</div>
            <p className="footer-about">© 2022 Cal.com, Inc.</p>
            <p className="footer-about">support@cal.com</p>
          </div>
          <div className="footer-column">
            <h3>SOLUTIONS</h3>
            <div className="footer-links">
              <a href="#">Self-hosted</a>
              <a href="#">SaaS Hosting</a>
              <a href="#">Platform</a>
              <a href="#">Desktop App</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>DOCUMENTATION</h3>
            <div className="footer-links">
              <a href="#">Product</a>
              <a href="#">Developers</a>
              <a href="#">Public API</a>
              <a href="#">Docker</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>RESOURCES</h3>
            <div className="footer-links">
              <a href="#">Blog</a>
              <a href="#">Merch Store</a>
              <a href="#">Open Startup</a>
              <a href="#">Embed</a>
              <a href="#">Developers</a>
              <a href="#">Routing Forms</a>
              <a href="#">Workflows</a>
              <a href="#">App Store</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>COMPANY</h3>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">License</a>
              <a href="#">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

