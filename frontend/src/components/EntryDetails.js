import { useEntriesContext } from '../hooks/useEntriesContext';

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
        <span className="material-symbols-outlined">edit</span>
        <span className="material-symbols-outlined" onClick={deleteEntry}>delete</span>
      </div>
    </div>
  );
};

export default EntryDetails;