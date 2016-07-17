import React from 'react';

const Display = ({display}) => {
  return (
    <div className="calc-container">
      <div className="calculations">
        <div className="current-result">
          <span>{display}</span>
        </div>
      </div>
    </div>
  );
}

export default Display
