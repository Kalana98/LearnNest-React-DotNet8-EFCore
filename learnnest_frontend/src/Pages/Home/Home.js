import React from 'react';
import './Home.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const facilities = [
    {
      title: 'Expert Tutoring',
      description: 'Get access to highly qualified tutors for personalized learning experiences.',
      buttonText: 'Learn More'
    },
    {
      title: 'Flexible Schedule',
      description: 'Choose from a range of class times to fit your busy schedule.',
      buttonText: 'Learn More'
    },
    {
      title: 'Advanced Curriculum',
      description: 'Learn with an up-to-date curriculum covering the latest trends and technologies.',
      buttonText: 'Learn More'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <h1 className="hero-title">Welcome to Learn Nest</h1>
          <p className="hero-subtitle">
            Your Gateway to Knowledge and Success
          </p>
          <Button variant="success" className="hero-button" onClick={() => navigate('/nav-courses')}>
            Explore Courses
          </Button>
        </Container>
      </div>

      {/* About Section */}
      <Container className="about-section">
        <Row>
          <Col md={12}>
            <h2 className="section-title">About Us</h2>
            <p className="about-description">
              At Learn Nest, we offer a variety of courses ranging from Mathematics and IT to Spoken English and Graphic Design. Join us to unlock your full potential and thrive in a nurturing learning environment.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Courses Section */}
      <Container className="courses-section">
      <div className="facility-section">
      <h1 className="facility-title">Our Facilities</h1>
      <div className="facility-cards-container">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <h2>{facility.title}</h2>
            <p>{facility.description}</p>
            <button className="facility-button">{facility.buttonText}</button>
          </div>
        ))}
      </div>
    </div>

      </Container>

      <button 
      className="navigate-button" 
      onClick={() => navigate('/enrollments')}
    >
      Go to Enrollment
    </button>

     
    </div>
  );
};

export default Home;
