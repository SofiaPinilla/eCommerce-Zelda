  
import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateZone = ({ children }) => {
  const hasToken = localStorage.getItem('authToken');

  return hasToken ?  children : (
    <Redirect
      to={{
        pathname: '/login',
      }}
    />
  );
};

export default PrivateZone;