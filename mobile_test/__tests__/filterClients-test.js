import React from 'react';
import renderer from 'react-test-renderer';
import clients from '../clients.json';
import MobileCompany from '../components/MobileCompany';

test('работа Filter Client Tests', () => {
  const component = renderer.create(
    <MobileCompany clients={clients} />,
  );

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // Находим все строки в таблицы с данными клиентов и сравниваем колличество
  let rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients.length).toBe(4);

  // Дергаем колбэки и сверяем данные
  component.getInstance().OnFilteredClient('active');
  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients.length).toBe(3);

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  component.getInstance().OnFilteredClient('blocked');
  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients.length).toBe(1);

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  component.getInstance().OnFilteredClient('all');
  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients.length).toBe(4);

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
