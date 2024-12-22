import React from 'react';
import '../App.css';

function aboutUs() {
  /* const [data,setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/departments")
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error("Error",error));
  },[]);  */


  return (
    <div className="App">     
    <h1>About us</h1>   
    <h2>Nutrition Facts Table</h2> 
    <table border ="1" style={{margin: "0 Auto"}}>
      <thead>
      <tr>
      <th>Whole Milk</th>
      <th>Net Carbs</th>
      <th>Protein</th>
      <th>Fat</th>
      <th>Calories</th>
      <th>Servings</th>
      </tr>
      </thead>
  
    <tbody>
      <tr>
        <td>Whole Milk</td>
        <td>Whole Milk</td>
        <td>Whole Milk</td>
        <td>Whole Milk</td>
        <td>Whole Milk</td>
        <td>Whole Milk</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>    
      
    </tbody>
    </table>

    
    </div>
  )
}

export default aboutUs;
