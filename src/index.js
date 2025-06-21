import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root DOM element where the React app will be mounted
const container = document.getElementById('root');
// Create a React root
const root = createRoot(container);

// Render the main App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
