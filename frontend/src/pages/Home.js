import { useEffect, useState } from 'react';

import './css/Home.css'

// components
import EntryDate from '../components/EntryDate'
import EntryDetails from '../components/EntryDetails'

const Home = () => {
  const [entries, setEntries] = useState(null);
  const [uniqueDates, setUniqueDates] = useState([]);

  
  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('http://localhost:4000/api/entries');
      const json = await response.json();

      
      if(response.ok){
        const newUniqueDates = uniqueDates;
        setEntries(json);
        json.forEach(element => {
          let dateExists = false;
          let newDate = new Date([element.year, element.month, element.day]);
          newUniqueDates.forEach(date => {
            if(newDate.toString() === date.toString()){
              dateExists = true;
            }
          })
          if(!dateExists){
            newUniqueDates.push(newDate);
          }
        });
        newUniqueDates.sort((date1, date2) => date2-date1);
        setUniqueDates(newUniqueDates);
      }
    }

    fetchEntries();
  }, [])
  
  const filterEntries = (date) => {
    const filteredEntries = entries.filter((entry) => {
      const entryDate = new Date([entry.year, entry.month, entry.day]);
      return entryDate.toString() === date.toString();
    })

    return filteredEntries;
  }

  return(
    <div className="home">
      <div className="entries">
        {uniqueDates && uniqueDates.map((date) => {
          return <EntryDate key={date} date={date} entries={filterEntries(date)}/>
        })}
      </div>
    </div>
  )
};

export default Home;