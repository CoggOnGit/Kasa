

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.jsx';
import { annonceList } from './data/annonceList'; 

const root = document.getElementById('root');

const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <App data={annonceList} />
  </React.StrictMode>
);