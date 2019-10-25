import React, { Component } from 'react'
import ItemProduct from './item-product'
import Categorries from '../../components/categories'

const products = [
  {
    id: 1,
    name: "Easy Polo Black Edition",
    img: "/images/shop/product12.jpg",
    price: 55,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Easy Polo Black Edition",
    img: "/images/shop/product11.jpg",
    price: 55,
    categoryId: 2,
  },
  {
    id: 3,
    name: "Easy Polo Black Edition",
    img: "/images/home/product2.jpg",
    price: 55,
    categoryId: 1,
  },
  {
    id: 4,
    name: "Easy Polo Black Edition",
    img: "/images/home/product6.jpg",
    price: 55,
    categoryId: 2,
  },
  {
    id: 5,
    name: "ao xau ry ai mua",
    img: "/images/home/product5.jpg",
    price: 10,
    categoryId: 3,
  },
  {
    id: 6,
    name: "Ao Tms",
    img: "/images/home/product1.jpg",
    price: 99,
    categoryId: 3,
  }
];

const categories = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Mens",
  },
  {
    id: 2,
    name: "Kids"
  },
  {
    id: 3,
    name: "Womens"
  }
];

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products,
      categories
    }
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
  render() {
    const { products } = this.state

    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="left-sidebar">
                  <h2>Category</h2>
                  <Categorries categories={this.state.categories} onChangeProduct={this.onChangeProduct} />
                </div>
              </div>
              <div className="col-sm-9 padding-right">
                <div className="features_items">
                  <h2 className="title text-center">Features Items</h2>
                  {products.map((item) => (
                    <ItemProduct key={item.id} product={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}