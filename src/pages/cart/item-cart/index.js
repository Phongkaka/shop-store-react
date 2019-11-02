import React, { Component } from "react";

export default class ItemCart extends Component {
  render() {
    var {item} = this.props;

    return (
      <tr>
        <td className="cart_product">
          <button type="button">
            <img src={item.img} alt="cart" />
          </button>
        </td>
        <td className="cart_description">
          <h4>{item.name}</h4>
        </td>
        <td className="cart_price">
          <p>{item.price}</p>
        </td>
        <td className="cart_quantity">
          <div className="cart_quantity_button">
            <button className="cart_quantity_up">+</button>
            <input
              className="cart_quantity_input"
              type="text"
              name="quantity"
              defaultValue={1}
              autoComplete="off"
              size={item.quantity}
            />
            <button className="cart_quantity_down">-</button>
          </div>
        </td>
        <td className="cart_total">
          <p className="cart_total_price">$59</p>
        </td>
        <td className="cart_delete">
          <button className="cart_quantity_delete">
            <i className="fa fa-times" />
          </button>
        </td>
      </tr>
    );
  }
}
