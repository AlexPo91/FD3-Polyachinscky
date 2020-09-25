import React from 'react';
import renderer from 'react-test-renderer';
import clients from '../clients.json';
import MobileCompany from '../components/MobileCompany';

test('работа Add Client', () => {
  const component = renderer.create(
    <MobileCompany clients={clients} test />,
  );

  const componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const btnAddClient = component.root.find((n) => n.props.className === 'addClientBtn');
  let rowsClients = component.root.findAll((n) => n.props.className === 'trClient');

  expect(rowsClients.length).toBe(4);

  btnAddClient.props.onClick();

  const btnSaveClient = component.root.find((n) => n.props.value === 'Add');
  btnSaveClient.props.onClick();

  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients.length).toBe(5);
});
