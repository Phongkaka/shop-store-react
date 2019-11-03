import React, { Component, Suspense, lazy } from "react";
import Header from "./components/header";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import RouterPath from "./constants/router-path";

const Products = lazy(() => import("./pages/products"));
const Cart = lazy(() => import("./pages/cart"));
const ProductDetail = lazy(() => import("./pages/product-detail"));

const products = [
  {
    id: 1,
    name: "Linus Torvalds",
    img: "/images/shop/product12.jpg",
    price: 55,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Sir Tim Berners-Lee",
    img: "/images/shop/product11.jpg",
    price: 55,
    categoryId: 2,
  },
  {
    id: 3,
    name: "Donald Knuth",
    img: "/images/home/product2.jpg",
    price: 55,
    categoryId: 1,
  },
  {
    id: 4,
    name: "Brenden Eich",
    img: "/images/home/product6.jpg",
    price: 55,
    categoryId: 2,
  },
  {
    id: 5,
    name: "Solomon Hykes",
    img: "/images/home/product5.jpg",
    price: 10,
    categoryId: 3,
  },
  {
    id: 6,
    name: "Mark Zuckerberg",
    img: "/images/home/product1.jpg",
    price: 99,
    categoryId: 3,
  }
];

const categories = [
  {
    id: 0,
    name: "All"
  },
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
  }
]

const cart = [
  {
    id: 6,
    name: "Mark Zuckerberg",
    img: "/images/home/product1.jpg",
    price: 99,
    categoryId: 3,
    quantity: 1
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products,
      categories,
      cart,
      activePage: 15
    };
  }

  addToCart = (product)=>{
    const {cart} = this.state; 
    const index = cart.find((item)=>item.id === product.id); 
    if (index){ 
      index.quantityn +=1;
    }else{ 
      cart.push(product);
    }
    this.setState({cart})
  }

  onChangeProduct = (id) => {
    this.setState({products: 
      products.filter(product => 
        product.categoryId === id
      )}
    )
    if (id === 0) {
      this.setState({products})
    }
  }

  changeQuantity = (item,value)=> {
    const {cart} = this.state;
    var index = cart.find((x)=>x.id===item.id);
    index.quantity += value;
    if (index.quantity===0)
    cart.splice(cart.indexOf(index), 1);
    this.setState({cart})
  }

  onDelete = (item) => {
    const {cart} = this.state;
    var index = cart.find((x)=>x.id===item.id);
    cart.splice(cart.indexOf(index), 1);
    this.setState({cart})
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <Router>
        <Header cart={this.state.cart} />
        <Suspense fallback={<div>Loading......</div>}>
          <Switch>
            <Route
              exact
              path={RouterPath.PRODUCTS.path}
              component={() => (
                <Products
                  products={this.state.products}
                  categories={this.state.categories}
                  onChangeProduct={this.onChangeProduct}
                  addToCart={this.addToCart}
                  handlePageChange={this.handlePageChange}
                  activePage={this.state.activePage}
                />
              )}
            />
            <Route 
              exact 
              path={RouterPath.CART.path} 
              component={() => (
                <Cart 
                  cart={this.state.cart} 
                  changeQuantity={this.changeQuantity}
                  onDelete={this.onDelete} 
                />
              )} 
              
            />
            <Route
              exact
              path={RouterPath.PRODUCT_DETAIL.path}
              component={({ match }) => (
                <ProductDetail
                  match={match}
                  addToCart={this.addToCart} 
                  products={this.state.products}
                  changeQuantity={this.changeQuantity}
                />
              )}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
