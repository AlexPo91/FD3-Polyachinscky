import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import mobileEvents from '../events';
import FormClient from './FormClient';
import './MobileCompany.css';

class MobileCompany extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clients: props.clients,
      workmode: 0, // 0 - кнокпа добавить, 1 - режим редактирования, 2 - режим добавления
      editableClient: null,
      filter: 'all', // all, active, blocked
    };
  }

  componentDidMount = () => {
    mobileEvents.addListener('EDeleteClient', this.deleteClient);
    mobileEvents.addListener('EEditedClient', this.editClient);
    mobileEvents.addListener('ESaveClient', this.saveClient);
    mobileEvents.addListener('ECancelEditClient', this.cancelEditClient);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('EDeleteClient', this.deleteClient);
    mobileEvents.removeListener('EEditedClient', this.editClient);
    mobileEvents.removeListener('ESaveClient', this.saveClient);
    mobileEvents.removeListener('ECancelEditClient', this.cancelEditClient);
  };

  deleteClient = (code) => {
    const { clients } = this.state;
    // let newClients = [...clients];
    // const index = newClients.findIndex((el) => el.id === code);
    // newClients = [
    //   ...newClients.slice(0, index),
    //   ...newClients.slice(index + 1),
    // ];

    const newClients = clients.filter((el) => el.id !== code);
    this.setState({ clients: newClients });
  }

  editClient = (code) => {
    const { clients } = this.state;
    this.setState({
      workmode: 1,
      editableClient: clients.find((el) => el.id === code),
    });
  }

  addedClient =() => {
    this.setState({
      workmode: 2,
    });
  }

  cancelEditClient = () => {
    this.setState({
      workmode: 0,
    });
  }

  OnFilteredClient = (filter) => {
    this.setState({
      filter,
    });
  }

  filterClient = (clients, filter) => {
    switch (filter) {
      case 'all':
        return clients;
      case 'active':
        return clients.filter((el) => el.balance > 0);
      case 'blocked':
        return clients.filter((el) => el.balance < 0);
      default:
        return clients;
    }
  }

dataComparison = (obj1, obj2) => {
  if (obj1.surname !== obj2.surname
    || obj1.name !== obj2.name
    || obj1.patronymic !== obj2.patronymic
    || obj1.balance !== obj2.balance
  ) {
    return true;
  }
  return false;
}

  saveClient = (client) => {
    let changed = false;

    const { clients, workmode } = this.state;

    let newClients = [];
    if (workmode === 1) {
      newClients = [...clients];
      newClients.forEach((el, i) => {
        if (el.id === client.id
          && this.dataComparison(el, client)
        ) {
          changed = true;
          newClients[i] = client;
        }
      });
    } else {
      newClients = [...clients, client];
    }
    if (changed || workmode === 2) {
      this.setState({
        clients: newClients,
        workmode: 0,
      });
    }
    if (!changed) {
      this.setState({
        workmode: 0,
      });
    }
  }

  render() {
    const {
      clients, workmode, editableClient, filter,
    } = this.state;
    const visibleClients = this.filterClient(clients, filter);
    const clientsCode = visibleClients.map((el) => <MobileClient key={el.id} client={el} />);
    const uniqId = clients.length === 0 ? 10
      : clients
        .reduce((prev, current) => (prev.b > current.b ? prev : current), {}).id + 10;
    return (
      <div className="MobileCompany">
        <div className="MobileCompany__item">
          <input type="button" value="Все" onClick={() => this.OnFilteredClient('all')} />
          <input type="button" value="Активные" onClick={() => this.OnFilteredClient('active')} />
          <input type="button" value="Заблокированные" onClick={() => this.OnFilteredClient('blocked')} />
        </div>
        <div className="MobileCompany__item">
          <table>
            <thead>
              <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Баланс</th>
                <th>Статус</th>
                <th>Редактировать</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {clientsCode}
            </tbody>
          </table>
          {workmode === 0 && <input className="addClientBtn" type="button" value="Добавить клиента" onClick={this.addedClient} />}
        </div>
        {workmode !== 0
        && (
        <FormClient
          editableClient={editableClient}
          key={workmode === 1 ? editableClient.id : null}
          workmode={workmode}
          uniqId={uniqId}
        />
        )}
      </div>
    );
  }
}

MobileCompany.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MobileCompany;
