import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './home/home';
import AboutUs from './aboutus/aboutUs';
import Department from './department/Department';

import './App.css';
import DepartmentList from './list/departmentList/DepartmentList';

function App() {
  
  return (
    <Router>
     <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/department">Department</Link> | <Link to="/about">About Us</Link>| <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/list' element={<DepartmentList/>}/>
      </Routes>

    </div>    
    
    </Router>
  )
}

export default App;
