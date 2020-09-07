/* eslint-disable no-restricted-globals */
import React from 'react';
import './ShopBlock.scss';
import ProductBlock from './ProductBlock';
import dataShop from '../product.json';
import CardProduct from './CardProduct';
import FormProduct from './FormProduct';

class ShopBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameShop: dataShop.nameShop,
      product: dataShop.product,
      selectProductStr: null,
      editedProduct: null,
      workmode: 0, // 0 ничего не открыто, 1 режим редактирования, 2 режим добавления
    };
  }

  deleteProduct = (code, { product } = this.state) => {
    // eslint-disable-next-line no-alert
    const boolAnswer = confirm('Delete?');
    if (boolAnswer) {
      const index = product.findIndex((el) => el.code === code);
      const newProductArr = [
        ...product.slice(0, index),
        ...product.slice(index + 1),
      ];
      this.setState({ product: newProductArr });
    }
  }

  selectProduct = (code, { selectProductStr } = this.state) => {
    this.setState({
      workmode: 0,
    });
    if (code === selectProductStr) {
      this.setState({ selectProductStr: null });
    } else {
      this.setState({ selectProductStr: code });
    }
  }

  // addProduct=() => {
  //   this.setState(
  //     {
  //       workmode: 2,
  //     },
  //   );
  // }

  editProduct = (code, { selectProductStr, product } = this.state) => {
    if (code !== selectProductStr) {
      this.setState({ selectProductStr: code });
    }
    this.setState({
      workmode: 1,
      editedProduct: product.find((el) => el.code === code),
    });
  }

  render() {
    const {
      nameShop, product, selectProductStr, workmode, editedProduct,
    } = this.state;
    const arrTitleProduct = Object.keys(dataShop.product[0]);
    arrTitleProduct.push('control');
    const titleProduct = arrTitleProduct.map((el, index) => (
      <th key={(index.toString())}>{el.slice(0, 1).toUpperCase() + el.slice(1)}</th>
    ));
    const productList = product.map((elem) => (
      <ProductBlock
        key={elem.code}
        model={elem.model}
        category={elem.category}
        image={elem.image}
        price={elem.price}
        balance={elem.balance}
        code={elem.code}
        deleteProduct={(e) => {
          e.stopPropagation();
          this.deleteProduct(elem.code);
        }}
        isSelected={selectProductStr === elem.code}
        selectProduct={() => {
          this.selectProduct(elem.code);
        }}
        editProduct={
          (e) => {
            e.stopPropagation();
            this.editProduct(elem.code);
          }
        }
      />
    ));
    const selectCardProduct = product.find((el) => el.code === selectProductStr);
    const buttonNewProduct = workmode !== 0 ? null : <input type="button" className="btn btn-newProduct" value="New Product" onClick={this.addProduct} />;
    // let forms;
    // if (workmode === 1) {
    //   forms = <FormProduct title="Edit existing Product" btn1="Save" btn2="Cancel" editedProduct={this.state.editedProduct} category={this.state.editedProduct.category} validationProduct={this.validationProduct} />;
    // }
    // } else if (workmode === 2) {
    //   forms = <FormProduct title="Add New Product" btn1="Add" btn2="Cancel" editedProduct="" />;
    // } else {
    //   forms = null;
    // }
    return (
      <div className="ShopBlock">
        <table className="TableProduct">
          <caption className="NameShop">
            {nameShop}
          </caption>
          <thead>
            <tr className="ProductTitle">{titleProduct}</tr>
          </thead>
          <tbody>
            {productList}
          </tbody>
        </table>
        {buttonNewProduct}
        { <CardProduct selectCardProduct={selectCardProduct} workmode={workmode} />}
        {/* {forms} */}
        {workmode === 1 && <FormProduct title="Edit existing Product" btn1="Save" btn2="Cancel" editedProduct={editedProduct} />}
      </div>
    );
  }
}

export default ShopBlock;
