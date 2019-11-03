import React, { Component } from 'react'

export default class ProductDetail extends Component {
  onAddProduct = (product) => {
    const { addToCart } = this.props;
    addToCart({ ...product, quantity: 1 })
  }

  render() {
    const { id } = this.props.match.params;
    let productItem =  this.props.products.find((item) => {
      return item.id === +id;
    })
    
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 padding-right">
              <div className="product-details">
                <div className="col-sm-5">
                  <div className="view-product">
                    <img src={productItem.img} alt="img" />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="product-information">
                    <h2>{productItem.name}</h2>
                    <span>
                      <span>{productItem.price}</span>
                      {/* <label>Quantity:</label>
                      <input type="text" defaultValue={productItem.quantity} /> */}
                      <button 
                        type="button" 
                        className="btn btn-fefault cart"
                        onClick={() => { this.onAddProduct(productItem) }}
                      >
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