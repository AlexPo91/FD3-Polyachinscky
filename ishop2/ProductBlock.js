const ProductBlock = React.createClass({

  displayName: "ProductBlock",

  propTypes: {
    selectProduct: React.PropTypes.func.isRequired,
    deleteProduct: React.PropTypes.func.isRequired,
    category: React.PropTypes.string.isRequired,
    model: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    balance: React.PropTypes.number.isRequired,
    code: React.PropTypes.string.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
  },

  productClicked: function(){
    this.props.selectProduct(this.props.code)
  },
  
  render() {
    return React.DOM.tr(
      { className: this.props.isSelected ? "ProductInfo active": "ProductInfo", onClick: this.productClicked}, 
      React.DOM.td(
        { className: "ProductTd" },
        this.props.category.slice(0, 1).toUpperCase() + this.props.category.slice(1)
      ),
      React.DOM.td({ className: "ModelTd" }, this.props.model),
      React.DOM.td({ className: "ImageTd" }, React.DOM.img({ src: this.props.image })),
      React.DOM.td({ className: "PriceTd" }, this.props.price),
      React.DOM.td({ className: "BalanceTd" }, this.props.balance),
      React.DOM.td({ className: "CodeTd" }, this.props.code), 
      React.DOM.td({className: "ControlTd"}, 
      React.DOM.input({className: "btn btn-delete", type: "button", value: "Delete",
      onClick: this.props.deleteProduct})
      )
    );
  },
});
