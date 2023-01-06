'use client';

import { aboutHome1 } from '../constants';

const AboutHome1 = () => (
  <section className="about-section">
    <div className="about-container glassmorphism">
      <div className="about-content">
        {aboutHome1.map((home) => (
          <div key={home.title} className="col-span-1 p-5">
            <div className="flex mb-10">
              <div className={`${home.color} about-icon`}>
                <home.icon />
              </div>
            </div>
            <div className="about-text">
              <h2>{home.title}</h2>
              <p>{home.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutHome1;
