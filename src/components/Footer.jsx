/* eslint-disable react/prop-types */
import React from 'react';

function Foot() {
  return (
    <div className="container bg-light shadow">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // padding: '1rem 2rem'
        }}
        className="p-2"
      >
        <div style={{
          display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', color: 'yellowgreen',
        }}
        >
          <h5>Developed By Olawale Micheal Juwon</h5>
        </div>
      </div>
    </div>
  );
}

export default Foot;
