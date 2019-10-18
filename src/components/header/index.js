import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from "../../pages/products"
import Cart from "../../pages/cart"

export default function Header() {
  return (
    <Router>
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
                      <Link to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                    <Link to="/cart">
                        Cart
                      </Link>
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
        <Route path="/products" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
      </header>
    </Router>
  );
}
