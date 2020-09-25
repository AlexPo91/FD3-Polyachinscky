import React from 'react';
import MobileCompany from './MobileCompany';
import clients from '../clients.json';

const App = () => (
  <>
    <MobileCompany clients={clients} />
  </>
);

export default App;
