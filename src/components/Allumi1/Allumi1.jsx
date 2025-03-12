
import { useState, useRef } from 'react';
import './Allumi1.css';


export function Allumi1() {

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


    {/* Alumni Sponsors */}
    return <section className="sponsors">
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
}