import React, { Component } from 'react'
import ItemProduct from './item-product/index'
import Categorries from '../../components/categories/index'

export default class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          name: "Easy Polo Black Edition",
          img: "/images/shop/product7.jpg",
          price: 55,
          categoryId: 1,
        },
        {
          id: 2,
          name: "Easy Polo Black Edition",
          img: "/images/shop/product8.jpg",
          price: 55,
          categoryId: 2,
        },
        {
          id: 3,
          name: "Easy Polo Black Edition",
          img: "/images/shop/product9.jpg",
          price: 55,
          categoryId: 3,
        },
        {
          id: 4,
          name: "Easy Polo Black Edition",
          img: "/images/shop/product10.jpg",
          price: 55,
          categoryId: 4,
        },
        {
          id: 5,
          name: "Easy Polo Black Edition",
          img: "/images/product-details/1.jpg",
          price: 55,
          categoryId: 1,
        }
      ],
      categories: [
        {
          id: 1,
          name: "Mens"
        },
        {
          id: 2,
          name: "Kids"
        },
        {
          id: 3,
          name: "Womens"
        },
        {
          id: 4,
          name: "Clothing"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <header id="header">
          {/*header*/}
          <div className="header_top">
            {/*header_top*/}
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="contactinfo">
                    <ul className="nav nav-pills">
                      <li><a href="#"><i className="fa fa-phone" /> +2 95 01 88 821</a></li>
                      <li><a href="#"><i className="fa fa-envelope" /> info@domain.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="social-icons pull-right">
                    <ul className="nav">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/header_top*/}
          <div className="header-middle">
            {/*header-middle*/}
            <div className="container">
              <div className="row">
                <div className="col-md-4 clearfix">
                  <div className="logo pull-left">
                    <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
                  </div>
                  <div className="btn-group pull-right clearfix">
                    <div className="btn-group">
                      <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                        USA
                      <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li><a href="/">Canada</a></li>
                        <li><a href="/">UK</a></li>
                      </ul>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                        DOLLAR
                      <span className="caret" />
                      </button>
                      <ul className="dropdown-menu">
                        <li><a href="#">Canadian Dollar</a></li>
                        <li><a href="/">Pound</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 clearfix">
                  <div className="shop-menu clearfix pull-right">
                    <ul className="nav">
                      <li><a href="/"><i className="fa fa-user" /> Account</a></li>
                      <li><a href="/"><i className="fa fa-star" /> Wishlist</a></li>
                      <li><a href="checkout.html"><i className="fa fa-crosshairs" /> Checkout</a></li>
                      <li><a href="cart.html"><i className="fa fa-shopping-cart" /> Cart</a></li>
                      <li><a href="login.html"><i className="fa fa-lock" /> Login</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/header-middle*/}
          <div className="header-bottom">
            {/*header-bottom*/}
            <div className="container">
              <div className="row">
                <div className="col-sm-9">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="mainmenu pull-left">
                    <ul className="nav collapse navbar-collapse">
                      <li><a href="index.html" className="active">Home</a></li>
                      <li className="dropdown">
                        <a href="/">Shop<i className="fa fa-angle-down" /></a>
                        <ul role="menu" className="sub-menu">
                          <li><a href="shop.html">Products</a></li>
                          <li><a href="product-details.html">Product Details</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li><a href="login.html">Login</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="/">Blog<i className="fa fa-angle-down" /></a>
                        <ul role="menu" className="sub-menu">
                          <li><a href="blog.html">Blog List</a></li>
                          <li><a href="blog-single.html">Blog Single</a></li>
                        </ul>
                      </li>
                      <li><a href="404.html">404</a></li>
                      <li><a href="contact-us.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="search_box pull-right">
                    <input type="text" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/header-bottom*/}
        </header>
        {/*/header*/}
        <section id="slider">
          {/*slider*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#slider-carousel" data-slide-to={0} className="active" />
                    <li data-target="#slider-carousel" data-slide-to={1} />
                    <li data-target="#slider-carousel" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="col-sm-6">
                        <h1><span>E</span>-SHOPPER</h1>
                        <h2>Free E-Commerce Template</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button type="button" className="btn btn-default get">Get it now</button>
                      </div>
                      <div className="col-sm-6">
                        <img src="images/home/girl1.jpg" className="girl img-responsive" alt="" />
                        <img src="images/home/pricing.png" className="pricing" alt="" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-sm-6">
                        <h1><span>E</span>-SHOPPER</h1>
                        <h2>100% Responsive Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button type="button" className="btn btn-default get">Get it now</button>
                      </div>
                      <div className="col-sm-6">
                        <img src="images/home/girl2.jpg" className="girl img-responsive" alt="" />
                        <img src="images/home/pricing.png" className="pricing" alt="" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-sm-6">
                        <h1><span>E</span>-SHOPPER</h1>
                        <h2>Free Ecommerce Template</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button type="button" className="btn btn-default get">Get it now</button>
                      </div>
                      <div className="col-sm-6">
                        <img src="images/home/girl3.jpg" className="girl img-responsive" alt="" />
                        <img src="images/home/pricing.png" className="pricing" alt="" />
                      </div>
                    </div>
                  </div>
                  <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                    <i className="fa fa-angle-left" />
                  </a>
                  <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/slider*/}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="left-sidebar">
                  <h2>Category</h2>
                  <Categorries categories={this.state.categories} />
                </div>
              </div>
              <div className="col-sm-9 padding-right">
                <div className="features_items">
                  <h2 className="title text-center">Features Items</h2>
                  {this.state.products.map((item) => (
                    <ItemProduct key={item.id} product={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          {/*Footer*/}
          <div className="footer-widget">
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>Service</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li><a href="#">Online Help</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Order Status</a></li>
                      <li><a href="#">Change Location</a></li>
                      <li><a href="#">FAQ’s</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>Quock Shop</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li><a href="#">T-Shirt</a></li>
                      <li><a href="#">Mens</a></li>
                      <li><a href="#">Womens</a></li>
                      <li><a href="#">Gift Cards</a></li>
                      <li><a href="#">Shoes</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>Policies</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Privecy Policy</a></li>
                      <li><a href="#">Refund Policy</a></li>
                      <li><a href="#">Billing System</a></li>
                      <li><a href="#">Ticket System</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>About Shopper</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li><a href="#">Company Information</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Store Location</a></li>
                      <li><a href="#">Affillate Program</a></li>
                      <li><a href="#">Copyright</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3 col-sm-offset-1">
                  <div className="single-widget">
                    <h2>About Shopper</h2>
                    <form action="#" className="searchform">
                      <input type="text" placeholder="Your email address" />
                      <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
                      <p>Get the most recent updates from <br />our site and be updated your self...</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <p className="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
                <p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
              </div>
            </div>
          </div>
        </footer>
        {/*/Footer*/}
      </div>
    )
  }
}