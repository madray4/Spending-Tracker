import { useEntriesContext } from '../hooks/useEntriesContext';
import { Link } from 'react-router-dom';

const EntryDetails = ({ entry }) => {
  const { dispatch } = useEntriesContext();

  const deleteEntry = async () => {
    const response = await fetch('/api/entries/' + entry._id,{
      method: 'DELETE'
    });
    const json = await response.json();

    if(response.ok){
      dispatch({type: 'DELETE_ENTRY', payload: json})
      console.log('Entry deleted.', json);
    }

  }

  return (
    <div className="entry-details">
      <p>{entry.store}</p>
      <p>{entry.item}</p>
      <p>${entry.totalCost}</p>
      <div className="entry-details-buttons">
        <Link to={'/edit-entry/' + entry._id}>
          <span className="material-symbols-outlined entry-details-button">edit</span>
        </Link>
        <span className="material-symbols-outlined entry-details-button" onClick={deleteEntry}>delete</span>
      </div>
    </div>
  );
};

export default EntryDetails;