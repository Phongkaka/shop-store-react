import React, { Component } from "react";
import { Link } from "react-router-dom";
import RouterPath from "../../../constants/router-path";

export default class ItemProduct extends Component {

  onAddProduct = (product) => {
    const { addToCart } = this.props;
    addToCart({ ...product, quantity: 1 })
  }

  render() {
    const { product } = this.props;
    
    return (
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={product.img} alt={product.img} />
              <h2>{product.price}</h2>
              <p>{product.name}</p>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>{product.price}</h2>
                <Link
                  to={RouterPath.PRODUCT_DETAIL.pathParams(product.id)}
                  className="name_product"
                >
                  {product.name}
                </Link>
                <button 
                  className="btn btn-default add-to-cart"
                  onClick={() => { this.onAddProduct(product) }}
                >
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}
