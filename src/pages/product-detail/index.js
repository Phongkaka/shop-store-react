import React, { Component } from 'react'

export default class ProductDetail extends Component {
  
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 padding-right">
              <div className="product-details">
                <div className="col-sm-5">
                  <div className="view-product">
                    <img src="images/product-details/1.jpg" alt="img" />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="product-information">
                    <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
                    <span>
                      <span>US $59</span>
                      <label>Quantity:</label>
                      <input type="text" defaultValue={3} />
                      <button type="button" className="btn btn-fefault cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}