import React, { useEffect, useState, useRef } from 'react';
import './App.css'
import { Header } from './components/Header/Header';
import {Hero} from './components/Hero/Hero'
import {About} from './components/AboutUs/About'
import { Fund } from './components/Fund/Fund';
import { Allumi } from './components/Allumi/Allumi';

const App = () => {
  

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



 

  return (
    <div className="site-wrapper">
      {/* Header */}
      <Header/>

      {/* Thank You Seniors Section */}
      <Hero/>
      <Allumi/>
      
      <About/>

      <Fund />

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

