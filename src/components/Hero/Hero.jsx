import './Hero.css';
import seniorImage from '../../assets/image.png'
export function Hero() {
    return <section><section className="thank-you-section">
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
    </section>
}