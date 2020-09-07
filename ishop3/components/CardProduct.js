import React from 'react';
import PropTypes from 'prop-types';
import './CardProduct.scss';

class CardProduct extends React.Component {
  render() {
    const { selectCardProduct, workmode } = this.props;
    if (selectCardProduct && workmode === 0) {
      return (
        <div className="CardProduct">
          <div className="Product">
            {selectCardProduct.category.slice(0, 1).toUpperCase() + selectCardProduct.category.slice(1)}
            {' '}
            {selectCardProduct.model}
          </div>
          <div className="PriceCard">
            Price:
            {' '}
            {selectCardProduct.price}
          </div>
          <div className="BalanceCard">
            Balance:
            {' '}
            {selectCardProduct.balance}
          </div>
        </div>
      );
    }
    return null;
  }
}
CardProduct.defaultProps = {
  selectCardProduct: null,
};
CardProduct.propTypes = {
  workmode: PropTypes.number.isRequired,
  selectCardProduct: PropTypes.shape({
    category: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
  }),
};
export default CardProduct;
