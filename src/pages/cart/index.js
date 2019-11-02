import React, { Component } from "react";
import ItemCart from "./item-cart";
import CartTotal from "./cart-total";

export default class Cart extends Component {
  showListCarts = list => {
    return list.map(item => {
      return <ItemCart key={item.id} item={item} />;
    });
  };

  amount = list => {
    var total = 0;
    for (var i = 0; i < list.length; i++) {
      total += list[i].price * list[i].quantity;
    }
    return total;
  };

  render() {
    const { cart } = this.props;
    return (
      <section id="cart_items">
        <div className="container">
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Item</td>
                  <td className="description">Name</td>
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">Total</td>
                  <td />
                </tr>
              </thead>
              <tbody>
                {this.showListCarts(cart)}
                <CartTotal total={this.amount(cart)} />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
