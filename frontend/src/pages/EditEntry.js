import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"

import './css/CreateEntry.css'

const EditEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { entry } = location.state;

  const [date, setDate ] = useState(entry.date);
  const [store, setStore ] = useState(entry.store);
  const [item, setItem ] = useState(entry.item);
  const [cost, setCost ] = useState(entry.totalCost);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedEntry = {date, store, item, totalCost: cost};
    const url = '/api/entries/' + entry._id;
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(editedEntry),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();

    if(response.ok){
      console.log("Before navigate")
      navigate('/');
    }
    else{
      console.log(response.error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit an Entry</h3>
      <label>Date:</label>
      <input type="date" 
              onChange={(e) => setDate(e.target.value)}
              value={date}/>
      <label>Store Name:</label>
      <input type="text" 
              onChange={(e) => setStore(e.target.value)}
              value={store}/>
      <label>Item:</label>
      <input type="text" 
              onChange={(e) => setItem(e.target.value)}
              value={item}/>
      <label>Total Cost:</label>
      <input type="number"
              onChange={(e) => setCost(e.target.value)}
              value={cost}/>
      <button>Submit</button>
    </form>
  );
};

export default EditEntry;