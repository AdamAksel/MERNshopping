import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '10vh',
        height: '10vh',
        margin: 'auto',
        display: 'block',
        marginTop: '10%',
      }}
    >
      <span className='sr-only'>Loading</span>
    </Spinner>
  );
};

export default Loader;
