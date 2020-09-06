import React from 'react';
import PropTypes from 'prop-types';
import './FormProduct.scss';

class FormProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.editedProduct.model,
      image: props.editedProduct.image,
      price: props.editedProduct.price,
      balance: props.editedProduct.balance,
      code: props.editedProduct.code,
      category: props.editedProduct.category,
    };
  }

  validate = (e) => {

  };

  render() {
    const {
      title, btn1, btn2,
    } = this.props;
    const {
      model, image, price, balance, code, category,
    } = this.state;
    return (
      <div className="FormProduct">
        <div className="TitleForm">{title}</div>
        <div className="PosProduct">1</div>
        <div className="divRow">
          <span>Category</span>
          {/* <select>
            <option>{category || 'Select Category'}</option>
            <option value="tv">TV</option>
            <option value="phone">Phone</option>
            <option value="notebook">Notebook</option>
          </select> */}
          <input type="text" value={category} onChange={this.validate} />
        </div>
        <div className="divRow">
          <span>Model</span>
          <input type="text" value={model} onChange={this.validate} />
        </div>
        <div className="divRow">
          <span>Url Image</span>
          <input type="text" value={image} onChange={this.validate} />
        </div>
        <div className="divRow">
          <span>Price</span>
          <input type="text" value={price} onChange={this.validate} />
        </div>
        <div className="divRow">
          <span>Balance</span>
          <input type="text" value={balance} onChange={this.validate} />
        </div>
        <div className="divRow">
          <span>Code</span>
          <input type="text" value={code} onChange={this.validate} />
        </div>
        <div className="buttonControl">
          <input type="button" value={btn1} />
          <input type="button" value={btn2} />
        </div>
      </div>
    );
  }
}
FormProduct.propTypes = {
  title: PropTypes.string.isRequired,
  btn1: PropTypes.string.isRequired,
  btn2: PropTypes.string.isRequired,
  // editedProduct: PropTypes.shape({
  //   category: PropTypes.string.isRequired,
  //   model: PropTypes.string.isRequired,
  //   image: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   balance: PropTypes.number.isRequired,
  //   code: PropTypes.string.isRequired,
  // }).isRequired,
  editedProduct: PropTypes.oneOfType([
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
      code: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]).isRequired,
};
export default FormProduct;
