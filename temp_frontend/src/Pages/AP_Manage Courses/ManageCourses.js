import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './ManageCourses.css';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({ courseName: '', courseDescription: '', courseDuration: '', courseFee: '' });
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [error, setError] = useState(null);

  const formRef = useRef(null);

  

  // Fetch all courses when the component loads
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const fetchAllCourses = async () => {
    try {
      const response = await axios.get('https://localhost:7209/api/course');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError('Failed to fetch courses. Please try again later.');
    }
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add a new course
  const addCourse = async () => {
    try {
      await axios.post('https://localhost:7209/api/course', formData);
      setFormData({ courseName: '', courseDescription: '', courseDuration: '', courseFee: '' });
      alert("Successfully Saved");
      fetchAllCourses(); // Refresh the course list
    } catch (error) {
      console.error('Error adding course:', error);
      setError('Failed to add course. Please try again later.');
    }
  };

  // Delete a course
  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`https://localhost:7209/api/course/${courseId}`);
      alert("Deleted Successfully");
      fetchAllCourses(); // Refresh the course list
    } catch (error) {
      console.error('Error deleting course:', error);
      setError('Failed to delete course. Please try again later.');
    }
  };

  // Set a course for editing
  const startEditing = (course) => {
    setFormData({
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      courseDuration: course.courseDuration,
      courseFee: course.courseFee,
    });
    setEditingCourseId(course.courseId);

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
  };

  // Update an existing course
  const updateCourse = async () => {
    try {
      await axios.put(`https://localhost:7209/api/course/${editingCourseId}`, formData);
      setFormData({ courseName: '', courseDescription: '', courseDuration: '', courseFee: '' });
      setEditingCourseId(null);
      fetchAllCourses(); // Refresh the course list
      alert("Course : Successfully updated");
    } catch (error) {
      console.error('Error updating course:', error);
      setError('Failed to update course. Please try again later.');
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingCourseId) {
      updateCourse();
    } else {
      addCourse();
    }
  };

  return (
    <div className='manage-courses'>
      <h1>Manage Courses</h1>
      
      {/* Error message display */}
      {error && <div className="error-message">{error}</div>}

      {/* Course form */}
      <div ref={formRef} className='course-form'>
      <form onSubmit={handleFormSubmit} className='course-form'>
        <input
          type='text'
          name='courseName'
          placeholder='Course Name'
          value={formData.courseName}
          onChange={handleInputChange}
          required
        />
        <textarea
          name='courseDescription'
          placeholder='Course Description'
          value={formData.courseDescription}
          onChange={handleInputChange}
          maxLength={50}
          required
        />
        <input
          type='text'
          name='courseDuration'
          placeholder='Course Duration (in years)'
          value={formData.courseDuration}
          onChange={handleInputChange}
          required
        />
        <input
          type='number'
          name='courseFee'
          placeholder='Course Fee'
          value={formData.courseFee}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>
          {editingCourseId ? 'Update Course' : 'Add Course'}
        </button>
      </form>
      </div>

      {/* Courses list */}
      <div className='courses-list'>
        <h2>All Courses</h2>
        {courses.map(course => (
          <div key={course.courseId} className='course-item'>
            <h3>{course.courseName}</h3>
            <p>{course.courseDescription}</p>
            <p>Duration: {course.courseDuration} years</p>
            <p>Fee: ${course.courseFee}</p>
            <button className='editBtn' onClick={() => startEditing(course)}>Edit</button>
            <button className='deleteBtn' onClick={() => deleteCourse(course.courseId)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
