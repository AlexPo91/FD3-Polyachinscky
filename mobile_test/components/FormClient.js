/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import mobileEvents from '../events';
import './FormClient.css';

class FormClient extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      surname: props.workmode === 1 ? props.editableClient.surname : '',
      name: props.workmode === 1 ? props.editableClient.name : '',
      patronymic: props.workmode === 1 ? props.editableClient.patronymic : '',
      balance: props.workmode === 1 ? props.editableClient.balance : '',
    };
    this.surname = React.createRef();
    this.name = React.createRef();
    this.patronymic = React.createRef();
    this.balance = React.createRef();
  }

  saveClient = () => {
    console.log(this.surname.current.value);
    const { editableClient, workmode, uniqId } = this.props;
    const newClient = {
      ...editableClient,
      surname: this.surname.current.value,
      name: this.name.current.value,
      patronymic: this.patronymic.current.value,
      balance: +this.balance.current.value,
    };
    if (workmode === 2) {
      newClient.id = uniqId;
    }
    mobileEvents.emit('ESaveClient', newClient);
  };

  cancelEditClient = () => {
    mobileEvents.emit('ECancelEditClient', null);
  }

  render() {
    console.log(this.surname);
    console.log('FormClient render');
    const { workmode } = this.props;
    const {
      surname, name, patronymic, balance,
    } = this.state;
    return (
      <div className="formClient">
        <table>
          <tbody>
            <tr>
              <td>Фамилия</td>
              <td><input type="text" defaultValue={surname} ref={this.surname} /></td>
            </tr>
            <tr>
              <td>Имя</td>
              <td><input type="text" defaultValue={name} ref={this.name} /></td>
            </tr>
            <tr>
              <td>Отчество</td>
              <td><input type="text" defaultValue={patronymic} ref={this.patronymic} /></td>
            </tr>
            <tr>
              <td>Баланс</td>
              <td><input type="text" defaultValue={balance} ref={this.balance} /></td>
            </tr>
          </tbody>
        </table>
        <div className="buttonControl">
          <input
            type="button"
            value={workmode === 1 ? 'Save' : 'Add'}
            onClick={this.saveClient}
          />
          <input type="button" value="Cancel" onClick={this.cancelEditClient} />
        </div>

      </div>
    );
  }
}
FormClient.defaultProps = {
  editableClient: null,
};
FormClient.propTypes = {
  workmode: PropTypes.number.isRequired,
  uniqId: PropTypes.number.isRequired,
  editableClient: PropTypes.shape({
    id: PropTypes.number.isRequired,
    surname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }),
};

export default FormClient;
