import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
    backgroundColor: '#f3f',
  };

  return <div style={style}>Wrapper {children}</div>;
}

export default Wrapper;
