import React from 'react';
import renderer from 'react-test-renderer';
import clients from '../clients.json';
import MobileCompany from '../components/MobileCompany';

test('работа Test Client', () => {
  const component = renderer.create(
    <MobileCompany clients={clients} />,
  );

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const btnFilterActive = component.root.find((n) => n.props.value === 'Активные');
  const btnFilterBlocked = component.root.find((n) => n.props.value === 'Заблокированные');
  const btnFilterAll = component.root.find((n) => n.props.value === 'Все');

  let rowsClients = component.root.findAll((n) => n.props.className === 'trClient');

  expect(rowsClients.length).toBe(4);

  btnFilterActive.props.onClick();

  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');

  expect(rowsClients.length).toBe(3);

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  btnFilterBlocked.props.onClick();

  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');

  expect(rowsClients.length).toBe(1);

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  btnFilterAll.props.onClick();

  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');

  expect(rowsClients.length).toBe(4);

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
