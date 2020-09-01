import React from 'react';

const NoResults = () => {
  return (
    <li className="pb-2 pt-2" style={{ display: 'block' }}>
      <p className="p-3 border shadow-sm rounded border-red-600 text-red-700">
        No results were found...
     </p>
    </li>
  )
};

export default NoResults;
