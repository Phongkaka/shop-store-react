import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RouterPath from '../../../constants/router-path'

import { CartContext } from "../../contexts"
export default class ItemProduct extends Component {
    
    render() {
        const { product } = this.props
        
        return (
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={product.img} alt={product.img} />
                            <h2>{product.price}</h2>
                            <p>{product.name}</p>
                            {/* <CartContext.Consumer>
                                {({ addToCart }) => (
                                <button onClick={() => addToCart(product)}>
                                    Add to cart
                                </button>
                                )}
                            </CartContext.Consumer> */}
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <h2>{product.price}</h2>
                                <p>{product.name}</p>
                                {/* <Link
                                    to={RouterPath.PRODUCT_DETAIL.pathParams(id)}
                                    className="btn btn-default add-to-cart"
                                >
                                    <i className="fa fa-shopping-cart" />Add to cart
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="choose">
                        <ul className="nav nav-pills nav-justified">
                            <li>
                                <button type="button">
                                    <i className="fa fa-plus-square" />Add to wishlist
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="fa fa-plus-square" />Add to compare
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
