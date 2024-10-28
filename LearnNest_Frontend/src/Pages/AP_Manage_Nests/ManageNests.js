import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './ManageNests.css';

const ManageNests = () => {
  const [nests, setNests] = useState([]);
  const [formData, setFormData] = useState({ nestName: '', nestLocation: '', nestDescription: '' });
  const [editingNestId, setEditingNestId] = useState(null);
  const [error, setError] = useState(null);

  const formRef = useRef(null);


  // Fetch all nests when the component loads
  useEffect(() => {
    fetchAllNests();
  }, []);

  const fetchAllNests = async () => {
    try {
      const response = await axios.get('https://localhost:7209/api/nest');
      setNests(response.data);
    } catch (error) {
      console.error('Error fetching nests:', error);
      setError('Failed to fetch nests. Please try again later.');
    }
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add a new nest
  const addNest = async () => {
    try {
      await axios.post('https://localhost:7209/api/nest', formData);
      setFormData({ nestName: '', nestLocation: '', nestDescription: '' });
      alert("Successfully Saved");
      fetchAllNests(); // Refresh the nest list
    } catch (error) {
      console.error('Error adding nest:', error);
      setError('Failed to add nest. Please try again later.');
    }
  };

  // Delete a nest
  const deleteNest = async (nestId) => {
    try {
      await axios.delete(`https://localhost:7209/api/nest/${nestId}`);
      alert("Deleted Successfully");
      fetchAllNests(); // Refresh the nest list
    } catch (error) {
      console.error('Error deleting nest:', error);
      setError('Failed to delete nest. Please try again later.');
    }
  };

  // Set a nest for editing
  const startEditing = (nest) => {
    setFormData({
      nestName: nest.nestName,
      nestLocation: nest.nestLocation,
      nestDescription: nest.nestDescription,
    });
    setEditingNestId(nest.nestId);

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update an existing nest
  const updateNest = async () => {
    try {
      await axios.put(`https://localhost:7209/api/nest/${editingNestId}`, formData);
      setFormData({ nestName: '', nestLocation: '', nestDescription: '' });
      setEditingNestId(null);
      fetchAllNests(); // Refresh the nest list
      alert("Nest : Successfully updated");
    } catch (error) {
      console.error('Error updating nest:', error);
      setError('Failed to update nest. Please try again later.');
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingNestId) {
      updateNest();
    } else {
      addNest();
    }
  };

  return (
    <div className='manage-nests'>
      <h1>Manage Nests</h1>
      
      {/* Error message display */}
      {error && <div className="error-message">{error}</div>}

      {/* Nest form */}
      <div ref={formRef} className='course-form'>
      <form onSubmit={handleFormSubmit} className='nest-form'>
        <input
          type='text'
          name='nestName'
          placeholder='Nest Name'
          value={formData.nestName}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          name='nestLocation'
          placeholder='Nest Location'
          value={formData.nestLocation}
          onChange={handleInputChange}
          required
        />
        <textarea
          name='nestDescription'
          placeholder='Nest Description'
          value={formData.nestDescription}
          onChange={handleInputChange}
          required
        />
        <button type='submit'>
          {editingNestId ? 'Update Nest' : 'Add Nest'}
        </button>
      </form>
    </div>
      {/* Nests list */}
      <div className='nests-list'>
        <h2>All Nests</h2>
        {nests.map(nest => (
          <div key={nest.nestId} className='nest-item'>
            <h3>{nest.nestName}</h3>
            <p>Location: {nest.nestLocation}</p>
            <p>{nest.nestDescription}</p>
            <button className="editBtn" onClick={() => startEditing(nest)}>Edit</button>
            <button className='deleteBtn' onClick={() => deleteNest(nest.nestId)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageNests;
