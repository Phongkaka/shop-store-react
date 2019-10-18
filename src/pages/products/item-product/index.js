import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ItemProduct extends Component {
    
    render() {
        let { name, img, price} = this.props.product;
        return (
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={img} alt="" />
                            <h2>{price}</h2>
                            <p>{name}</p>
                            <Link
                                to="/cart"
                                className="btn btn-default add-to-cart"
                            >
                                <i className="fa fa-shopping-cart" />Add to cart
                            </Link>
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <h2>{price}</h2>
                                <p>{name}</p>
                                <Link
                                    to="/cart"
                                    className="btn btn-default add-to-cart"
                                >
                                    <i className="fa fa-shopping-cart" />Add to cart
                                </Link>
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
