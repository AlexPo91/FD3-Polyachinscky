import React from 'react';
import PropTypes from 'prop-types';

class ProductBlock extends React.Component {
  productClicked = () => {
    const { selectProduct, code } = this.props;
    selectProduct(code);
  }

  render() {
    const {
      model, category, image, price, balance, code, deleteProduct, isSelected, editProduct,
    } = this.props;
    return (
      <tr className={isSelected ? 'ProductInfo active' : 'ProductInfo'} onClick={this.productClicked}>
        <td className="ProductTd">{category.slice(0, 1).toUpperCase() + category.slice(1)}</td>
        <td className="ModelTd">{model}</td>
        <td className="ImageTd">
          <img src={image} alt="" />
        </td>
        <td className="PriceTd">{price}</td>
        <td className="BalanceTd">{balance}</td>
        <td className="CodeTd">{code}</td>
        <td className="ControlTd">
          <input type="button" className="btn btn-edit" value="Edit" onClick={editProduct} />
          <input type="button" className="btn btn-delete" value="Delete" onClick={deleteProduct} />
        </td>
      </tr>
    );
  }
}
ProductBlock.propTypes = {
  editProduct: PropTypes.func.isRequired,
  selectProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
export default ProductBlock;
