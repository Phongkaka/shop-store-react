import React, { Component } from "react";
import ItemProduct from "./item-product";
import Categorries from "../../components/categories";
import Pagination from "../../components/pagination";

export default class Products extends Component {
  render() {
    const { 
            products, 
            categories, 
            onChangeProduct, 
            addToCart,
            handlePageChange,
            activePage
          } = this.props;
    const listProduct = products => {
      if (products)
        return products.map(item => {
          return (
            <ItemProduct key={item.id} product={item} addToCart={addToCart} />
          );
        });
    };
    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="left-sidebar">
                  <h2>Category</h2>
                  <Categorries
                    categories={categories}
                    onChangeProduct={onChangeProduct}
                  />
                </div>
              </div>
              <div className="col-sm-9 padding-right">
                <div className="features_items">
                  <h2 className="title text-center">Features Items</h2>
                  {listProduct(products)}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Pagination handlePageChange={handlePageChange} activePage={activePage}  />
      </div>
    );
  }
}
