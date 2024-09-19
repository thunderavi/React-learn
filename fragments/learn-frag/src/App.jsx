import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';


function App() {
   let foodItems=['Dal','Green Vagetables','Roti','Salad','Milk'];
    //let foodItems=[];
 
  return (
   // <React.Fragment>
    <>
    
      <h1>Healthy items</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
   // </React.Fragment>
  );
}

export default App;
