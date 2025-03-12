import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Allumi.css';

const Allumi = () => {
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
    <div className="alumni-section">
      <section className="sponsors">
        <div className="container">
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
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                loop={true}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  }
                }}
              >
                {sponsors.map((sponsor) => (
                  <SwiperSlide key={sponsor.id}>
                    <div className="sponsor-slide">
                      <div className="sponsor-image"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            <div className="sponsor-details">
              <div className="sponsor-info">
                <h3>{sponsors[activeSlide].name}</h3>
                <p>{sponsors[activeSlide].title}</p>
                <p>{sponsors[activeSlide].batch}</p>
                <div className="nav-arrows">
                  <button className="nav-arrow" onClick={handlePrev}>&lt;</button>
                  <button className="nav-arrow" onClick={handleNext}>&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export {Allumi};