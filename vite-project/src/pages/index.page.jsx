// src/pages/index.page.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export { Page }

function Page() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" />
        <meta property="og:description" content="Welcome to the home page!" />
      </Helmet>
      <h1>Welcome to My SSR Vite App</h1>
    </div>
  );
}
