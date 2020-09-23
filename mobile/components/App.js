import React from 'react';
import MobileCompany from './MobileCompany';
import clients from '../clients.json';

const companyName = 'Velcom';
const App = () => (
  <>
    <MobileCompany name={companyName} clients={clients} />
  </>
);

export default App;
