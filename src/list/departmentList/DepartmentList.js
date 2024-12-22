import React, { useEffect,useState} from 'react';
import '../../App.css';

function DepartmentList() {
  
   const [departments,setDepartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/departments")
    .then(response => response.json())
    .then(data => setDepartments(data))
    .catch(error => console.error("Error",error));
  },[]); 

  
  return (
    <div className="App">         
        <h2> Department List</h2>
       {/* <select         
          onChange={(event) => {
            console.log('Selected Department:', event.target.value);
          }}
          style={{ width: "150px", padding: "5px", margin: "5px 0" }} // Inline style for the dropdown
        >
          <option value="">--Select a Department--</option>
          {data.map((dept) => (
            <option key={dept.departmentId} value={dept.departmentName}>
              {dept.departmentName}
            </option>
          ))}
        </select> */}
        <table border="1" style={{ margin: "0 auto" }}>
            <thead>
              <tr>
                <td>Department ID</td>
                <td>Department Code</td>
                <td>Department Name</td>
                <td>Department Address</td>
              </tr>
            </thead>

            <tbody>
              {departments.map((dept) => (
                <tr key={dept.departmentId}>
                  <td>{dept.departmentId}</td>
                  <td>{dept.departmentCode}</td>
                  <td>{dept.departmentName}</td>
                  <td>{dept.departmentAddress}</td>
                </tr>
              ))};
            </tbody>
          </table>
    
    </div>
  )
}

export default DepartmentList;
