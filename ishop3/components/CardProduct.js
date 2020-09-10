import React from 'react';
import PropTypes from 'prop-types';
import './CardProduct.scss';

class CardProduct extends React.Component {
  render() {
    const { selectedProduct } = this.props;
    return (
      <div className="CardProduct">
        <div className="Product">
          {selectedProduct.category.slice(0, 1).toUpperCase()
          + selectedProduct.category.slice(1)}
          {' '}
          {selectedProduct.model}
        </div>
        <div className="PriceCard">
          Price:
          {' '}
          {selectedProduct.price}
        </div>
        <div className="BalanceCard">
          Balance:
          {' '}
          {selectedProduct.balance}
        </div>
      </div>
    );
  }
}
CardProduct.defaultProps = {
  selectedProduct: null,
};
CardProduct.propTypes = {
  selectedProduct: PropTypes.shape({
    category: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
  }),
};
export default CardProduct;
