import './App.css';
import NavBar from './Components/Navbar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './Pages/Courses/CoursesNav';
import Home from './Pages/Home/Home';
import Nests from './Pages/Nests/Nests';
import AboutUs from './Pages/About Us/AboutUs';
import ContactUs from './Pages/Contact Us/ContactUs';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import ManageCourses from './Pages/AP_Manage Courses/ManageCourses';
import ManageNests from './Pages/AP_Manage_Nests/ManageNests';
import Footer from './Components/Footer/Footer';
import Enrollment from './Pages/Enrollments/Enrollment';
import ManageEnrollments from './Pages/AP_Manage_Enrollments/ManageEnrollments'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/nav-courses' element={<Courses />} />
              <Route path='/nests' element={<Nests />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/adminpanel' element={<AdminPanel />} />
              <Route path='/manage-courses'element={<ManageCourses />} />
              <Route path='/manage-nests' element={<ManageNests />} />
              <Route path='/manage-enrollments' element={<ManageEnrollments />} />
              <Route path='/enrollments' element={<Enrollment />} />
          </Routes>
          <Footer />
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
