import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';

function App() {
 // let foodItems=['Dal','Green Vagetables','Roti','Salad','Milk']
  let foodItems=[]
  let emtyfood=foodItems.length ===0 ? <h3>I AM STILL HUNGRY</h3> :null;
  return (
   // <React.Fragment>
    <>
    
      <h1>Healthy items</h1>
      {emtyfood}
      <ul className="list-group">
        {foodItems.map((item=><li key={item} className="list-group-item">{item}</li>
        ))}
     
      </ul>
    </>
   // </React.Fragment>
  );
}

export default App;
