import React from 'react';

import '../styles/globals.css';

const Swrl:React.ReactNode = ({Component, pageProps}: {Component:React.ComponentType, pageProps: any}) => {
  return (
    <Component {...pageProps} />
  )
};

export default Swrl;

