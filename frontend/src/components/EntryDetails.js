import React from 'react';

const EntryDetails = ({ entry }) => {

  return (
    <div className="entry-details">
      <p>{entry.store}</p>
      <p>{entry.item}</p>
      <p>${entry.totalCost}</p>
      <p>{entry.isNecessary}</p>
      <p></p>
    </div>
  );
};

export default EntryDetails;