import { useEffect, useState } from 'react';

import './css/Home.css'

// components
import EntryDate from '../components/EntryDate'

const Home = () => {
  const [entries, setEntries] = useState(null);
  const [uniqueDates, setUniqueDates] = useState([]);

  
  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('http://localhost:4000/api/entries');
      const json = await response.json();

      if(response.ok){
        setEntries(json);
        getUniqueDates(json);
      }
    }
    fetchEntries();
  }, [])
  
  const getUniqueDates = (entries) => {
    const newUniqueDatesSet = new Set();
    entries.forEach(entry => {
      let newDate = new Date(entry.date);
      newUniqueDatesSet.add(newDate.toString())
    });

    let newUniqueDates = uniqueDates;
    newUniqueDatesSet.forEach(date => {
      newUniqueDates.push(date);
    })
    newUniqueDates.sort((date1, date2) => new Date(date2)-new Date(date1));
    console.log(newUniqueDates)
    setUniqueDates(newUniqueDates);
  }

  const filterEntries = (date) => {
    const filteredEntries = entries.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate.toString() === date;
    })
    return filteredEntries;
  }

  return(
    <div className="home">
      <div className="entries">
        {uniqueDates && uniqueDates.map((date) => {
          return <EntryDate key={date} date={new Date(date)} entries={filterEntries(date)}/>
        })}
      </div>
    </div>
  )
};

export default Home;