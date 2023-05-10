import { useEffect } from 'react';
import { useEntriesContext } from '../hooks/useEntriesContext';
import { useAuthContext } from '../hooks/useAuthContext';

import './css/Home.css'

// components
import EntryDate from '../components/EntryDate'

const Home = () => {
  const { entries, dispatch } = useEntriesContext();
  const { user } = useAuthContext();
  
  useEffect(() => {
    // if no user just return
    if ( !user ) return;
    const fetchEntries = async () => {
      // use user.token in authorization headers to make authorized request
      const response = await fetch('/api/entries', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if(response.ok){
        dispatch({type: 'SET_ENTRIES', payload: json});
      }
    }
    fetchEntries();
  }, [dispatch, user]);
  
  const getUniqueDates = (entries) => {
    const uniqueDatesSet = new Set();
    entries.forEach(entry => {
      let newDate = new Date(entry.date);
      uniqueDatesSet.add(newDate.toString());
    });

    let uniqueDates = [];
    uniqueDatesSet.forEach(date => {
      uniqueDates.push(date);
    })
    uniqueDates.sort((date1, date2) => new Date(date2)-new Date(date1));
    return uniqueDates;
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
        {entries && getUniqueDates(entries).map((date) => {
          return <EntryDate key={date} date={date} entries={filterEntries(date)}/>
        })}
      </div>
    </div>
  )
};

export default Home;