const EntryDetails = ({ entry }) => {

  return (
    <div className="entry-details">
      <p>{entry.store}</p>
      <p>{entry.item}</p>
      <p>${entry.totalCost}</p>
    </div>
  );
};

export default EntryDetails;