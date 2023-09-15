import React from 'react';
import Nav from './Nav'; // Importez votre composant de navigation ici

function LayoutHome({ children }) {
  return (
    <body> 
        {children}
    </body>
  );
}

export default LayoutHome;