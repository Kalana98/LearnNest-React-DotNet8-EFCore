import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-container">
        <h1 className="about-us-title">About Learn Nest</h1>
        <p className="about-us-description">
          Welcome to Learn Nest, your trusted partner in education and skill development.
          Our mission is to empower students with the knowledge and tools they need to
          succeed in their academic and professional journeys. We offer a variety of courses,
          including Mathematics, Information Technology, Spoken English, Graphic Design, and
          many more, tailored to meet the needs of students of all ages.
        </p>

        <div className="about-us-details">
          <div className="about-us-card">
            <h2>Our Mission</h2>
            <p>
              To provide high-quality, accessible education to everyone, fostering a love for
              learning and encouraging critical thinking. Our dedicated instructors ensure that
              every student reaches their full potential.
            </p>
          </div>
          <div className="about-us-card">
            <h2>Our Vision</h2>
            <p>
              To become a leading educational institute recognized for innovative teaching
              methods, expert tutors, and a strong sense of community. We aim to create a world
              where everyone has the opportunity to learn and thrive.
            </p>
          </div>
          <div className="about-us-card">
            <h2>Why Choose Us?</h2>
            <p>
              At Learn Nest, we prioritize the success of our students by providing personalized
              learning experiences. Our courses are crafted by industry experts, ensuring that
              you gain practical knowledge and skills that are relevant in today’s world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
