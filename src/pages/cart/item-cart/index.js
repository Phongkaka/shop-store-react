import React, { Component } from "react";

export default class ItemCart extends Component {
  render() {
    const { item, changeQuantity, onDelete } = this.props;

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
            <button
              onClick={() => changeQuantity(item, 1)} 
              className="cart_quantity_up"
            >
              +
            </button>
              <span className="quatity__product">{item.quantity}</span>
            <button 
              onClick={() => changeQuantity(item, -1)} 
              className="cart_quantity_down"
            >
              -
            </button>
          </div>
        </td>
        <td className="cart_delete">
          <button 
            onClick={() => onDelete(item)}
            className="cart_quantity_delete"
          >
            <i className="fa fa-times" />
          </button>
        </td>
      </tr>
    );
  }
}
