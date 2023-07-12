import React from 'react';
import { Helmet } from 'react-helmet';

export default function Headers() {
  return (
    <div className="App">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Muli&display=swap"
        />
        <title>1-React</title>
      </Helmet>
    </div>
  );
}