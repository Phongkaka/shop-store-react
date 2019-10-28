import React, { Component } from "react";
import { Link } from "react-router-dom";
import RouterPath from "../../../constants/router-path";

export default class ItemProduct extends Component {

  onAddProduct = (id) => {

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
                <p>{product.name}</p>
                <button onClick={(e) => {e.preventDefault(); this.onAddProduct(product.id)}}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="choose">
            <Link
              to={RouterPath.PRODUCT_DETAIL.pathParams(product.id)}
              className="btn btn-default add-to-cart"
            >
              <i className="fa fa-shopping-cart" />
              show detail
            </Link>
          </div>
        </div>
      
      </div>
    );
  }
}
