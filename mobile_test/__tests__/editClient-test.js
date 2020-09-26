import React from 'react';
import renderer from 'react-test-renderer';
import clients from '../clients.json';
import MobileCompany from '../components/MobileCompany';

test('работа Edit Client', () => {
  const component = renderer.create(
    <MobileCompany clients={clients} test />,
  );

  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
  // Находим кнопку редактирования
  const btnEditClient = component.root.findAll((n) => n.props.className === 'btnEdit');
  // Находим все строки в таблицы с данными клиентов и сравниваем
  let rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients[0].props.children[0].props.children).toBe('Иванов');

  // Имитируем нажатие для изменение state. Меняем workmode.
  btnEditClient[0].props.onClick();

  // Дергаем коллбэк и сравниваем результат
  component.getInstance().saveClient({
    id: clients[0].id, surname: 'test', name: 'test', patronymic: 'test', balance: 0,
  });
  rowsClients = component.root.findAll((n) => n.props.className === 'trClient');
  expect(rowsClients[0].props.children[0].props.children).toBe('test');

  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
