import React, { Component } from "react";

export default class CartTotal extends Component {
  render() {
    return (
      <tr>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.props.total}$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Hoàn tất mua hàng
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }
}
