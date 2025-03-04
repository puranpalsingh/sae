import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css'

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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
      <header>
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

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>THANK<br/>YOU<br/>SENIORS</h1>
          <p>we all Miss You</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="innovation-header">
            <h2>POWERING INNOVATION, DRIVEN BY ALUMNI</h2>
            <p>Join hands with SAE NIT Kurukshetra and accelerate our journey in building cutting-edge EV and CV projects. Your support fuels our dreams!</p>
            <a href="#" className="btn">Fund Now</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-container">
          <div className="stat-item">
            <div className="stat-number">4627+</div>
            <div className="stat-label">TOTAL FUND</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24<span style={{ fontSize: '1.5rem' }}>K</span></div>
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

      {/* About Section */}
      <section className="about">
        <div className="container about-container">
          <div className="about-images">
            <div className="about-img large"></div>
            <div className="about-img"></div>
            <div className="about-img"></div>
          </div>
          <div className="about-content">
            <h2>ABOUT US</h2>
            <p>We are a dedicated team of professionals committed to fostering strong connections between our alumni and current students. Our mission is to create a supportive community that benefits all members of our institution.</p>
            
            <h3>What We Do ?</h3>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <div>Connect Alumni & Students for Mentorship and Guidance</div>
            </div>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <div>Organize Events & Conferences to Build a Strong Network</div>
            </div>
            <div className="service-item">
              <span className="service-icon">✓</span>
              <div>Facilitate Funding for Student Projects & Research</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Section */}
      <section className="fund">
        <div className="container fund-container">
          <h2>HOW TO FUND</h2>
          <div className="fund-steps">
            <div className="fund-step">
              <div className="step-number">1</div>
              <h3>Choose Your Contribution</h3>
              <p>Select the amount you wish to contribute to support our initiatives and student projects.</p>
            </div>
            <div className="fund-step">
              <div className="step-number">2</div>
              <h3>Choose Your Destination</h3>
              <p>Decide which specific program, department, or initiative you want your contribution to support.</p>
            </div>
            <div className="fund-step">
              <div className="step-number">3</div>
              <h3>Choose Your Payment Method</h3>
              <p>Select from various secure payment options to complete your contribution.</p>
            </div>
          </div>
        </div>
      </section>

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

