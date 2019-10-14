import React, { Component } from 'react'

export default class ItemProduct extends Component {
    
    render() {
        let { name, categoryId, img, price} = this.props.product;
        return (
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={img} alt="" />
                            <h2>{price}</h2>
                            <p>{name}</p>
                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <h2>{price}</h2>
                                <p>{name}</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="choose">
                        <ul className="nav nav-pills nav-justified">
                            <li><a href="#"><i className="fa fa-plus-square" />Add to wishlist</a></li>
                            <li><a href="#"><i className="fa fa-plus-square" />Add to compare</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
