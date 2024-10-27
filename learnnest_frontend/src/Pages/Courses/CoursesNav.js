import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';
import axios from 'axios';

const CoursesNav = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const fetchAllCourses = async () => {
    try {
      const response = await axios.get('https://localhost:7209/api/Course');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError('Failed to fetch courses. Please try again later.');
    }
  };

  return (
    <div className='course-section'>
      <h1 className="section-title">Explore Our Courses</h1>

      {/* Display an error message if there's an error */}
      {error && <div className="error-message">{error}</div>}

      {/* Centered container for courses */}
      <div className="courses-container" onClick={() => navigate('/enrollments')}>
        {courses.length > 0 ? (
          courses.map(course => (
            <div key={course.courseId} className='course-card'>
              <h2>{course.courseName}</h2>
              <p>{course.courseDescription}</p>
              <p>Duration: {course.courseDuration} Years</p>
              <p>Fee: ${course.courseFee}</p>
              <button className="enroll-button" onClick={() => {navigate('/enrollments');}}>Enroll Now</button>
            </div>
          ))
        ) : (
          !error && <div className="loading-message">Loading courses...</div>
        )}
      </div>
    </div>
  );
};

export default CoursesNav;
