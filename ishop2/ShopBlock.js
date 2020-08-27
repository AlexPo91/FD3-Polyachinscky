const ShopBlock = React.createClass({
  displayName: "ShopBlock",

  getInitialState: function () {
    return { 
      selectProductStr: null,
      productArr: this.props.productArr };
  },

  propTypes: {
    productArr: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        category: React.PropTypes.string.isRequired,
        model: React.PropTypes.string.isRequired,
        image: React.PropTypes.string,
        price: React.PropTypes.number.isRequired,
        balance: React.PropTypes.number.isRequired,
        code: React.PropTypes.string.isRequired,
      })
    ),
    titleTable: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    nameShop: React.PropTypes.string.isRequired
  },

  selectProduct: function (code) {
    if(code === this.state.selectProductStr){
      this.setState({selectProductStr: null})
    }else{
      this.setState({selectProductStr: code})
    }
  },

  deleteProduct: function (code) {
    let boolAnswer = confirm("Delete?");
    if (boolAnswer) {
      const index = this.state.productArr.findIndex((el) => el.code === code);
      const newProductArr = [
        ...this.state.productArr.slice(0, index),
        ...this.state.productArr.slice(index + 1),
      ];
      this.setState({ productArr: newProductArr });
    }
  },

  render() {
    const tableItem = [];
    this.props.titleTable.forEach((el, index) => {
      tableItem.push(
        React.DOM.th({ key: index }, el.slice(0, 1).toUpperCase() + el.slice(1))
      );
    });
    const productList = this.state.productArr.map((elem) => {
      return React.createElement(ProductBlock, {
        key: elem.code,
        model: elem.model,
        category: elem.category,
        image: elem.image,
        price: elem.price,
        balance: elem.balance,
        code: elem.code,
        isSelected: (this.state.selectProductStr === elem.code),
        deleteProduct: (e) => {
          e.stopPropagation();
          this.deleteProduct(elem.code);
        },
        selectProduct: this.selectProduct
      });
    });
    return React.DOM.div(
      { className: "ShopBlock" },
      React.DOM.table(
        { className: "TableProduct" },
        React.DOM.caption({ className: "NameShop" }, this.props.nameShop),
        React.DOM.thead(
          null,
          React.DOM.tr({ className: "ProductTitle" }, tableItem)
        ),
        React.DOM.tbody(null, productList)
      )
    );
  },
});
