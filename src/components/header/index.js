import React, { Component } from "react";
import { Link } from "react-router-dom"
export default class Header extends Component {
  render() {
    const { cart } = this.props
    
    return (
      <header>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav collapse navbar-collapse">
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart <i className="total__cart">{cart.length}</i></Link>
                    </li>
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
      </header>
    );
  }
}
