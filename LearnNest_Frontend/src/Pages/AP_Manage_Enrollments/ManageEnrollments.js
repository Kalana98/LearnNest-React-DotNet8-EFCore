import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageEnrollments.css';

const ManageEnrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [courses, setCourses] = useState([]); // List of available courses
  const [nests, setNests] = useState([]); // List of available nest locations
  const [newEnrollment, setNewEnrollment] = useState({
    courseName: '',
    studentName: '',
    studentEmail: '',
    contactNo: '',
    address: '',
    nestLocation: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchEnrollments();
    fetchCourses();
    fetchNests();
  }, []);

  // Fetch enrollments
  const fetchEnrollments = async () => {
    try {
      const response = await axios.get('https://localhost:7209/api/Enrollment');
      setEnrollments(response.data);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    }
  };

  // Fetch available courses for dropdown
  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://localhost:7209/api/Course');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Fetch available nest locations for dropdown
  const fetchNests = async () => {
    try {
      const response = await axios.get('https://localhost:7209/api/Nest');
      setNests(response.data);
    } catch (error) {
      console.error('Error fetching nests:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEnrollment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddOrUpdateEnrollment = async () => {
    if (isEditing) {
      try {
        await axios.put(`https://localhost:7209/api/Enrollment/${editingId}`, newEnrollment);
        alert('Enrollment updated successfully');
        setIsEditing(false);
        setEditingId(null);
        fetchEnrollments();
        resetForm();
      } catch (error) {
        console.error('Error updating enrollment:', error);
      }
    } else {
      try {
        await axios.post('https://localhost:7209/api/Enrollment', newEnrollment);
        alert('Enrollment added successfully');
        fetchEnrollments();
        resetForm();
      } catch (error) {
        console.error('Error adding enrollment:', error);
      }
    }
  };

  const handleEdit = (enrollment) => {
    setIsEditing(true);
    setEditingId(enrollment.id);
    setNewEnrollment(enrollment);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this enrollment?')) {
      try {
        await axios.delete(`https://localhost:7209/api/Enrollment/${id}`);
        alert('Enrollment deleted successfully');
        fetchEnrollments();
      } catch (error) {
        console.error('Error deleting enrollment:', error);
      }
    }
  };

  const resetForm = () => {
    setNewEnrollment({
      courseName: '',
      studentName: '',
      studentEmail: '',
      contactNo: '',
      address: '',
      nestLocation: '',
    });
  };

  return (
    <div className="manage-enrollments-container">
      <h1 className="manage-enrollments-title">Manage Enrollments</h1>

      <div className="enrollment-form">
        <h2>{isEditing ? 'Edit Enrollment' : 'Add New Enrollment'}</h2>
        <select
          name="courseName"
          value={newEnrollment.courseName}
          onChange={handleInputChange}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.courseId} value={course.courseName}>
              {course.courseName}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="studentName"
          value={newEnrollment.studentName}
          placeholder="Student Name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="studentEmail"
          value={newEnrollment.studentEmail}
          placeholder="Student Email"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contactNo"
          value={newEnrollment.contactNo}
          placeholder="Contact Number"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          value={newEnrollment.address}
          placeholder="Address"
          onChange={handleInputChange}
        />
        <select
          name="nestLocation"
          value={newEnrollment.nestLocation}
          onChange={handleInputChange}
        >
          <option value="">Select Nest Location</option>
          {nests.map((nest) => (
            <option key={nest.nestId} value={nest.nestLocation}>
              {nest.nestName}
            </option>
          ))}
        </select>
        <button onClick={handleAddOrUpdateEnrollment}>
          {isEditing ? 'Update Enrollment' : 'Add Enrollment'}
        </button>
      </div>

      <div className="enrollments-list">
        <h2>List of Enrollments</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Student Address</th>
              <th>Nest Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id}>
                <td>{enrollment.courseName}</td>
                <td>{enrollment.studentName}</td>
                <td>{enrollment.studentEmail}</td>
                <td>{enrollment.contactNo}</td>
                <td>{enrollment.address}</td>
                <td>{enrollment.nestLocation}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(enrollment)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(enrollment.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEnrollments;
