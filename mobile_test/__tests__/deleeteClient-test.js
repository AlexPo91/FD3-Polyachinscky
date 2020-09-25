import React from 'react';
import renderer from 'react-test-renderer';
import clients from '../clients.json';
import MobileCompany from '../components/MobileCompany';

test('работа Delete Client', () => {
  const component = renderer.create(
    <MobileCompany clients={clients} />,
  );

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const btnDelete = component.root.findAll((n) => n.props.className === 'btnDelete');
  let rowsClients = component.root.findAll((n) => n.props.className === 'trClient');

  expect(rowsClients.length).toBe(4);

  btnDelete[btnDelete.length - 1].props.onClick();

  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');

  expect(rowsClients.length).toBe(3);

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  btnDelete[0].props.onClick();

  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');

  expect(rowsClients.length).toBe(2);

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  expect(rowsClients[0].props.children[0].props.children).toBe('Сидоров');
  expect(rowsClients[rowsClients.length - 1].props.children[0].props.children).toBe('Петров');
});
