import React from 'react';
import renderer from 'react-test-renderer';
import clients from '../clients.json';
import MobileCompany from '../components/MobileCompany';

test('работа Add Client Tests', () => {
  const component = renderer.create(
    <MobileCompany clients={clients} test />,
  );

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // Находим кнопку добавления
  const btnAddClient = component.root.find((n) => n.props.className === 'addClientBtn');

  // Находим все строки в таблицы с данными клиентов и сравниваем колличество
  let rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients.length).toBe(4);

  // Имитируем нажатие для изменение state. Меняем workmode.
  btnAddClient.props.onClick();

  // Дергаем коллбэк
  component.getInstance().saveClient({
    id: 0, surname: 'test', name: 'test', patronymic: 'test', balance: 0,
  });

  // Находим уже изменненые строи и сравниваем их колличество
  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients.length).toBe(5);

  // Получаем снэпшот
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
