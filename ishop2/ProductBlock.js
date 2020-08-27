const ProductBlock = React.createClass({
  displayName: "ProductBlock",
  render() {
    return React.DOM.tr(
      { className: "ProductInfo"},
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
