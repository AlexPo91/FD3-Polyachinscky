import React from 'react';
import renderer from 'react-test-renderer';
import clients from '../clients.json';
import MobileCompany from '../components/MobileCompany';

test('работа Delete Client Tests', () => {
  const component = renderer.create(
    <MobileCompany clients={clients} />,
  );

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // Находим все строки в таблицы с данными клиентов и сравниваем колличество
  let rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients.length).toBe(4);

  // Дергаем коллбэк и сверяем данные
  component.getInstance().deleteClient(clients[0].id);
  component.getInstance().deleteClient(clients[clients.length - 1].id);

  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients.length).toBe(2);

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  expect(rowsClients[0].props.children[0].props.children).toBe('Сидоров');
  expect(rowsClients[rowsClients.length - 1].props.children[0].props.children).toBe('Петров');
});
