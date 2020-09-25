/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import mobileEvents from '../events';

class MobileClient extends React.PureComponent {
  deleteClient = () => {
    const { client: { id } } = this.props;
    mobileEvents.emit('EDeleteClient', id);
  }

editedClient = () => {
  const { client: { id } } = this.props;
  mobileEvents.emit('EEditedClient', id);
}

render() {
  const { client } = this.props;
  return (
    <tr className="trClient">
      <td>{client.surname}</td>
      <td>{client.name}</td>
      <td>{client.patronymic}</td>
      <td className="tdBalance">{client.balance}</td>
      {client.balance > 0 ? <td className="tdStatus" style={{ backgroundColor: 'green' }}>active</td> : <td className="tdStatus" style={{ backgroundColor: 'red' }}>blocked</td>}
      <td className="tdEditBtn"><input type="button" className="btnEdit" value="Редактировать" onClick={this.editedClient} /></td>
      <td className="tdDeleteBtn"><input type="button" className="btnDelete" value="Удалить" onClick={this.deleteClient} /></td>
    </tr>
  );
}
}
MobileClient.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.number.isRequired,
    surname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
};
export default MobileClient;
