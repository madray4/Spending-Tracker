import { useEffect, useState } from 'react';

// components
import EntryDetails from '../components/EntryDetails'

const Home = () => {
  const [entries, setEntries] = useState(null);

  
  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('http://localhost:4000/api/entries');
      const json = await response.json();

      // console.log('fetching entries')
      // console.log(json);
      if(response.ok){
        setEntries(json);
      }
    }

    fetchEntries();
  }, [])
  
  return(
    <div className="home">
      <div className="entries">
        {entries && entries.map((entry) => {
          return <EntryDetails key={entry._id} entry={entry}/>
        })}
      </div>
    </div>
  )
};

export default Home;