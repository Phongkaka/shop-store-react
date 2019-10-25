import React, { Suspense, lazy } from "react"
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom"
import RouterPath from '../../constants/router-path'

const Products = lazy(() => import('../../pages/products'))
const Cart = lazy(() => import('../../pages/cart'))
const ProductDetail = lazy(() => import('../../pages/product-detail'))

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
        <Suspense fallback={<div>Loading......</div>}>
          <Switch>
            <Route exact path={RouterPath.PRODUCTS.path} component={Products} />
            <Route exact path={RouterPath.CART.path} component={Cart} />
            <Route exact path="/product-detail" component={ProductDetail} />
          </Switch>
        </Suspense>
      </header>
    </Router>
  );
}
