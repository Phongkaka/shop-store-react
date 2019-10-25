const RouterPath = {

  PRODUCTS: {
    path: '/products',
  },

  CART: {
    path: '/cart',
  },

  PRODUCT_DETAIL: {
    path: '/products/:id',
    pathParams: (id) => `/products/${id}`
  }
}
export default RouterPath
