import './AdminPanel.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdminPanel = () => {

  return (
    <div className='admin-panel-section'>
      
      <div className="admin-panel-title">
        <h1>Admin Panel</h1>
      </div>

      <div className="row">

          <div className="col-md-3">
            <Link to="/manage-enrollments">
              <button>Enrollments</button>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/manage-Courses">
               <button>Courses</button>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/manage-nests">
                <button>Nests</button>
            </Link>
          </div>

          

      </div>

      
    </div>
  )
}

export default AdminPanel
