import React from 'react';

const root = {
  display: 'flex',
  flexWrap: 'wrap',
};

const code = {
  fontFamily: 'monospace',
  fontSize: '1.75rem',
  padding: '2px',
  marginRight: '1rem',
  color: ' #1d1d1d',
  backgroundColor: '#f5f5f5',
  borderRadius: '3px',
};

const Technologies = ({ techs }) => {
  return (
    <div style={root}>
      {techs.map((item) => (
        <p style={code}>{item}</p>
      ))}
    </div>
  );
};

export default Technologies;
