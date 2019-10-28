import React, { Component } from 'react'
import ItemProduct from './item-product'
import Categorries from '../../components/categories'

export default class Products extends Component {
  
  render() {
    var {products, categories, onChangeProduct}  = this.props

    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="left-sidebar">
                  <h2>Category</h2>
                  <Categorries categories={categories} onChangeProduct={onChangeProduct} />
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