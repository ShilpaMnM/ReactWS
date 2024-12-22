import React, { useState} from 'react';
import '../App.css';

function Department() {
  
   const [newDepartmentCode,setNewDepartmentCode] = useState('');
   const [newDepartmentName,setNewDepartmentName] = useState('');
   const [newDepartmentAddress,setNewDepartmentAddress] = useState('');

   

  const handleAddDepartment =(e) => {
    fetch("http://localhost:8082/departments",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({departmentCode:newDepartmentCode,departmentName:newDepartmentName,departmentAddress:newDepartmentAddress})
    })
    .then(response => response.json())
    .then(alert("Department created successfully"))
    .catch(error => console.error("Error",error));
  }

  return (
    <div className="App">
      <h1>Department page</h1>  
        <h2>Add New Department</h2>
        <form onSubmit={handleAddDepartment}>       	
          Department Code
          <input type='text' placeholder='Department Code' value={newDepartmentCode} onChange={(e) => setNewDepartmentCode(e.target.value)}>
            
          </input>
          Department Name
          <input type='text' placeholder='Department Name' value={newDepartmentName} onChange={(e) => setNewDepartmentName(e.target.value)}>
      
          </input>
          Department Address
          <input type='text' placeholder='Department Address' value={newDepartmentAddress} onChange={(e) => setNewDepartmentAddress(e.target.value)}>
       
          </input>
          <button type='submit' >Add Department </button>
        </form>      
    
    </div>
  )
}

export default Department;
