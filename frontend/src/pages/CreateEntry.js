import { useState } from 'react';
import { useNavigate } from "react-router-dom"

import './css/CreateEntry.css'

const CreateEntry = () => {
  const [date, setDate ] = useState('');
  const [store, setStore ] = useState('');
  const [item, setItem ] = useState('');
  const [cost, setCost ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const entry = {date, store, item, totalCost:cost};
    const response = await fetch('/api/entries',{
      method: 'POST',
      body: JSON.stringify(entry),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // const json = await response.json();

    if(response.ok){
      navigate('/');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add an Entry</h3>
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
  )
};

export default CreateEntry;