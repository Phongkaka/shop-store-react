import React, { Component } from 'react'

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <section id="cart_items">
        <div className="container">
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Item</td>
                  <td className="description" />
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">Total</td>
                  <td />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cart_product">
                    <button type="button">
                      <img src="images/cart/one.png" alt="cart" />
                    </button>
                  </td>
                  <td className="cart_description">
                    <h4>
                      Colorblock Scuba
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className="cart_price">
                    <p>$59</p>
                  </td>
                  <td className="cart_quantity">
                    <div className="cart_quantity_button">
                      <button className="cart_quantity_up">+</button>
                      <input 
                        className="cart_quantity_input" 
                        type="text" name="quantity" 
                        defaultValue={1} 
                        autoComplete="off" 
                        size={2} 
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
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}