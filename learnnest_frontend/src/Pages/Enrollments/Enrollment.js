import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Enrollment.css';

const Enrollment = () => {
  const [courses, setCourses] = useState([]);
  const [nests, setNests] = useState([]);
  const [formData, setFormData] = useState({
    CourseName: '',
    StudentName: '',
    StudentEmail: '',
    ContactNo: '',
    Address: '',
    NestLocation: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchCourses();
    fetchNests();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://localhost:7209/api/course');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const fetchNests = async () => {
    try {
      const response = await axios.get('https://localhost:7209/api/nest');
      setNests(response.data);
    } catch (error) {
      console.error('Error fetching nests:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await axios.post('https://localhost:7209/api/enrollment', formData);
      setSuccessMessage('Enrollment Successful!');
      setFormData({
        CourseName: '',
        StudentName: '',
        StudentEmail: '',
        ContactNo: '',
        Address: '',
        NestLocation: ''
      });
    } catch (error) {
      console.error('Error enrolling student:', error);
      setError('You have already enrolled for this course.');
    }
  };

  return (
    <div className="enrollment-section">
      <h1>Enroll for a Course</h1>
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form className="enrollment-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Course Name:</label>
          <select
            name="CourseName"
            value={formData.CourseName}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Course</option>
            {courses.map(course => (
              <option key={course.courseId} value={course.courseName}>{course.courseName}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            name="StudentName"
            value={formData.StudentName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Student Email:</label>
          <input
            type="email"
            name="StudentEmail"
            value={formData.StudentEmail}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Contact No:</label>
          <input
            type="text"
            name="ContactNo"
            value={formData.ContactNo}
            onChange={handleInputChange}
            placeholder="Enter your contact number"
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            required
          />
        </div>

        <div className="form-group">
          <label>Nest Location:</label>
          <select
            name="NestLocation"
            value={formData.NestLocation}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Nest Location</option>
            {nests.map(nest => (
              <option key={nest.nestId} value={nest.nestLocation}>{nest.nestLocation}</option>
            ))}
          </select>
        </div>

        <button type="submit">Submit Enrollment</button>
      </form>
    </div>
  );
};

export default Enrollment;
